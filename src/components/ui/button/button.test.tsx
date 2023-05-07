
import StyledButton from '.'
import {render, fireEvent, waitFor} from '@testing-library/react-native'
import { StyledButtonProps } from './button';

describe('Test shared Button Component', () => {
  
  const setup = async ({text, onPress}:StyledButtonProps) => {
    return await waitFor(() => render(
      <StyledButton text={text} onPress={onPress} />
    )) 
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test(`Should render component`, async () => {
    const pressButtonMock = jest.fn()
    const {getByText} = await setup({
      onPress: pressButtonMock,
      text: 'Button test'
    })

    const butt = getByText('Button test')

    fireEvent.press(butt)

    expect(pressButtonMock).toHaveBeenCalled()
  })
})