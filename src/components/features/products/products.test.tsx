
import Products from '.'
import { act } from 'react-dom/test-utils';
import {render, screen, fireEvent, waitFor} from '@testing-library/react-native'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { IProduct } from '@/src/services/models/product';


const navigate = jest.fn()
const moduleRouter = {
  useNavigate: () => navigate
}
jest.mock('react-router-native', () => moduleRouter)

const mockProduct = {
  id: 'idtest',
  name: 'Product test',
  description: '',
  image: '',
  price: 1000,
  categoria: 'categoriatest',
  isAddCart: false
}

jest.mock('../../../services/config/context', () => ({
  useRepositoryIoc: jest.fn().mockReturnValue({
    container: {
      get: jest.fn().mockReturnValue({
        list: jest.fn().mockImplementation(() => Promise.resolve<IProduct[]>([mockProduct]))
      })
    }
  })
}))


const mockStore = configureStore([]);

describe('Test feature products list', () => {
  
  const setup = async (store:any) => {
    return await waitFor(() => render(
      <Provider store={store}>
        <Products title='Page test' code='codetest'/>
      </Provider>
    )) 
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test(`Should render component `, async () => {
    const store = mockStore({
      product: {
        products: []
      }
    });
    await act(async () => {
      const {toJSON} = await setup(store)

      expect(toJSON()).toMatchSnapshot()
    });
  })

  test(`Should render component if products are in the store`, async () => {
    const store = mockStore({
      product: {
        products: [ {...mockProduct, isAddCart: true} ]
      }
    });
    await act(async () => {
      const {toJSON} = await setup(store)

      expect(toJSON()).toMatchSnapshot()
    });
  })


  test(`Should click card for to detail product`, async () => {
    await act(async () => {
      const store = mockStore({
        product: {
          products: []
        }
      });
      const {getByTestId} = await setup(store)

      const button = getByTestId('productCard')
      fireEvent.press(button)
      expect(navigate).toHaveBeenCalledWith('/detail/' + mockProduct.id)
    });
  })

  test(`Should click add to cart`, async () => {
    await act(async () => {
      const store = mockStore({
        product: {
          products: []
        }
      });
      const {getByTestId} = await setup(store)

      const button = getByTestId('addCart')
      fireEvent.press(button)
      
      expect(store.getActions()[0].payload.isAddCart).toBe(true)
    });
  })
})