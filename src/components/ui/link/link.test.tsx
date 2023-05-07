
import LinkNav from '.'
import {render, fireEvent, waitFor} from '@testing-library/react-native'

const navigate = jest.fn()
const location = jest.fn().mockReturnValue({pathname: 'to'})
const moduleRouter = {
  useNavigate: () => navigate,
  useLocation: () => location
}
jest.mock('react-router-native', () => moduleRouter)

describe('Test shared LinkNav Component', () => {
  
  const setup = async () => {
    return await waitFor(() => render(
      <LinkNav to='/' icon={()=> ''}/>
    )) 
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test(`Should render component`, async () => {
    const {getByTestId} = await setup()

    const butt = getByTestId('link-to')

    fireEvent.press(butt)

    expect(navigate).toHaveBeenCalled()
  })
})