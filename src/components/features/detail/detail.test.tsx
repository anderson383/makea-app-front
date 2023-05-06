
import Detail from './detail'
import {render, screen, fireEvent} from '@testing-library/react-native'
import { Provider } from 'react-redux';
import storeTest from '../../../core/redux/store-test';

jest.mock('react-router-native', () => ({
  useParams: jest.fn().mockReturnValue({id: 'idtest'})
}))


jest.mock('../../../services/config/context', () => ({
  useRepositoryIoc: jest.fn().mockReturnValue({
    container: {
      get: jest.fn().mockReturnValue({
        get: jest.fn().mockImplementation(() => Promise.resolve())
      })
    }
  })
}))

describe('Test feature detail product', () => {
  const store = storeTest();
  const setup = () => {
    render(
      <Provider store={store}>
        <Detail />
      </Provider>
    )
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should render component and get product', () => {
    setup()
  })
})