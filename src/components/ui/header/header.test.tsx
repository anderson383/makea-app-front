
import Header from '.'
import {render, screen, fireEvent, waitFor} from '@testing-library/react-native'
import { HeaderProps } from './header';

describe('Test shared Header Component', () => {
  
  const setup = async (props:HeaderProps) => {
    return await waitFor(() => render(
      <Header {...props}  />
    )) 
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test(`Should render component`, async () => {
    const {getByText} = await setup({
      title: 'Hola mundo'
    })

    expect(getByText('Hola mundo')).toBeDefined()
  })
})