
import NavBar from '.'
import {render, fireEvent, waitFor} from '@testing-library/react-native'
import { View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const navigate = jest.fn()
const moduleRouter = {
  useNavigate: () => navigate,
  useLocation: () => jest.fn().mockReturnValue({pathname: 'to'})
}
jest.mock('react-router-native', () => moduleRouter)

const mockStore = configureStore([]);

describe('Test shared NavBar Component', () => {
  
  const setup = async (store:any) => {
    return await waitFor(() => render(
      <Provider store={store}>
        <NavBar />
      </Provider>
      
    )) 
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test(`Should render component`, async () => {
    const store = mockStore({
      product: {products: [{}, {}]}
    })
    const {toJSON} = await setup(store)
    expect(toJSON()).toMatchSnapshot()
  })
})