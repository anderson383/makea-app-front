
import Product from '.'
import { act } from 'react-dom/test-utils';
import {render, screen, fireEvent, waitFor} from '@testing-library/react-native'
import { ProductProps } from './product';

const productMock = {
  id: 'id-test',
  image: 'imgaentest',
  description: 'product description',
  price: 2000,
  categoria: 'category',
  isAddCart: false,
  name: 'Chicharron! xd'
}

describe('Test shared Product Component', () => {
  
  const setup = async (props:ProductProps) => {
    return await waitFor(() => render(
      <Product {...props} />
    )) 
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test(`Should render component`, async () => {
    const {toJSON} = await setup({
      product: productMock
    })

    expect(toJSON).toMatchSnapshot()
  })

  test(`Should render component is not add cart and click all card`, async () => {
    const pressAddCart = jest.fn()
    const clickCart = jest.fn()
    const {getByTestId} = await setup({
      product: {...productMock, isAddCart: true},
      onClickHeart: pressAddCart,
      onClickCard: clickCart
    })

    const butt = getByTestId('addCart')
    const card = getByTestId('productCard')
    
    fireEvent.press(butt)
    fireEvent.press(card)

    expect(pressAddCart).toHaveBeenCalled()
    expect(clickCart) .toHaveBeenCalled()
  })   
})
