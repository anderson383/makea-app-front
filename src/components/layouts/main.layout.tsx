import {NativeRouter}  from 'react-router-native'
import NavBar from '../features/nav-bar'


interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout:React.FC<MainLayoutProps> = ({children}) => {

  return (
    <>
      <NativeRouter>
        {children}
        <NavBar />
      </NativeRouter>
    </>
  )
}