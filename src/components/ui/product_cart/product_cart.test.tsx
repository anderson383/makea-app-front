
import ProductCart from '.'
import {render, fireEvent, waitFor} from '@testing-library/react-native'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { IProduct } from '@/src/services/models/product';


const productMock = {
  id: 'id-test',
  image: 'imgaentest',
  description: 'product description',
  price: 2000,
  categoria: 'category',
  isAddCart: true,
  name: 'Chicharron! xd'
}

const mockStore = configureStore([]);

describe('Test shared ProductCart Component', () => {
  
  const setup = async (store:any, product:IProduct) => {
    return await waitFor(() => render(
      <Provider store={store}>
        <ProductCart product={product} />
      </Provider>
    )) 
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test(`Should render component`, async () => {
    const store = mockStore({ product: { products: [] } })

    const {toJSON} = await setup(store, productMock)

    expect(toJSON).toMatchSnapshot()
  })

  test(`Should delete item`, async () => {
    const store = mockStore({ product: { products: [] } })

    const {getByTestId} = await setup(store, productMock)

    const butt = getByTestId('deleteItem')
    
    fireEvent.press(butt)

    expect(store.getActions()[0].payload.isAddCart).toBe(!productMock.isAddCart)
  })   
})
