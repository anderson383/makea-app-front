
import SuccessPay from '.'
import {render, fireEvent, waitFor} from '@testing-library/react-native'

const navigate = jest.fn()
const moduleRouter = {
  useNavigate: () => navigate
}
jest.mock('react-router-native', () => moduleRouter)

describe('Test SuccessPay Component', () => {
  
  const setup = async () => {
    return await waitFor(() => render(
      <SuccessPay />
    )) 
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test(`Should render component`, async () => {
    const {toJSON} = await setup()

    expect(toJSON).toMatchSnapshot()
  })

  test(`Should click button buying`, async () => {
    const {getByTestId} = await setup()

    const button = getByTestId('styledButton')
    fireEvent.press(button)

    expect(navigate).toHaveBeenCalled()
  })
})