import {View, Text} from 'react-native'
import { MainLayout } from '../components/layouts/main.layout'
import {Routes, Route}  from 'react-router-native'
import Products from '../components/features/products'
import CardShop from '../components/features/card-shop/card-shop'
import { RepositoryIocProvider } from '../services/config/context'

export const IndexPage = () => {

  return (
    <RepositoryIocProvider>
      <MainLayout>
        <Routes>
          <Route path={'/'} element={<Products />} />
          <Route path={'/card-shop'} element={<CardShop />} />
        </Routes>
      </MainLayout>
    </RepositoryIocProvider>
  )
}

 