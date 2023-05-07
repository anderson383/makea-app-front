
import CardShop from '.'
import { act } from 'react-dom/test-utils';
import {render, fireEvent, waitFor} from '@testing-library/react-native'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';


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
  isAddCart: true
}

const mockStore = configureStore([]);

describe('Test feature CardShop product', () => {
  
  const setup = async (store:any) => {
    return await waitFor(() => render(
      <Provider store={store}>
        <CardShop />
      </Provider>
    )) 
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test(`Should render component`, async () => {
    const store = mockStore({
      product: {
        products: [mockProduct]
      }
    });
    await act(async () => {
      const {toJSON} = await setup(store)

      expect(toJSON()).toMatchSnapshot()
    });
  })

  test(`Should click at buy button`, async () => {
    await act(async () => {
      const store = mockStore({
        product: {
          products: [mockProduct]
        }
      });
      const {getByTestId} = await setup(store)

      const button = getByTestId('buttonBuy')
      fireEvent.press(button)
      expect(store.getActions()[0].payload).toEqual([])
      expect(navigate).toHaveBeenCalledWith('/success-pay')
    });
  })
})