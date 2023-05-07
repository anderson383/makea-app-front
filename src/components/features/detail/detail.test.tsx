
import Detail from '.'
import { act } from 'react-dom/test-utils';
import {render, screen, fireEvent, waitFor} from '@testing-library/react-native'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { IProduct } from '@/src/services/models/product';
import {
  AnyAction, Dispatch, Middleware
} from 'redux';

jest.mock('react-router-native', () => ({
  useParams: jest.fn().mockReturnValue({id: 'idtest'})
}))

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
        get: jest.fn().mockImplementation(() => Promise.resolve<IProduct>(mockProduct))
      })
    }
  })
}))


const mockStore = configureStore([]);

describe('Test feature detail product', () => {
  
  const setup = async (store:any) => {
    return await waitFor(() => render(
      <Provider store={store}>
        <Detail />
      </Provider>
    )) 
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test(`Should render component and get product if product isn't selected in the store `, async () => {
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

  test(`Should render component and get product if product isn't selected in the store `, async () => {
    await act(async () => {
      const store = mockStore({
        product: {
          products: []
        }
      });
      const {getByTestId} = await setup(store)

      const button = getByTestId('addCart')
      fireEvent.press(button)
      expect(store.getActions()[0].payload.isAddCart).toEqual(true)
    });
  })

  test(`Should render component and get product if product is selected in the store `, async () => {
    const store = mockStore({
      product: {
        products: [{...mockProduct, isAddCart: true}]
      }
    });

    await act(async () => {
      const {toJSON} = await setup(store)


      expect(toJSON()).toMatchSnapshot()
    });
  })
})