
import {SplashCustomScreen} from './splash-screen'
import {render, fireEvent, waitFor} from '@testing-library/react-native'

describe('Test Splash Screen Component', () => {
  
  const setup = async () => {
    return await waitFor(() => render(
      <SplashCustomScreen />
    )) 
  }


  test(`Should render component`, async () => {
    const {toJSON} = await setup()

    expect(toJSON).toMatchSnapshot()
  })
})