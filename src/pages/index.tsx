import {View, Text} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { MainLayout } from '../layouts/main.layout'
import {Routes, Route}  from 'react-router-native'
import Products from '../components/features/products'
import CardShop from '../components/features/card-shop'
import DetailProduct from '../components/features/detail'
import { RepositoryIocProvider } from '../services/config/context'
import SuccessPay from '../components/features/success-pay/success-pay'

export const IndexPage = () => {

  return (
    <>
      <StatusBar style='dark' />
      <RepositoryIocProvider>
        <MainLayout>
          <Routes>
            <Route path={'/'} element={<Products title={'Muebles'} code={'basic'}  />} />
            <Route path={'/home-life'} element={<Products title={'Hogar y vida'} code={'home-life'} />} />
            <Route path={'/card-shop'} element={<CardShop />} />
            <Route path={'/detail/:id'} element={<DetailProduct />} />
            <Route path={'/success-pay'} element={<SuccessPay c/>} />
          </Routes>
        </MainLayout>
      </RepositoryIocProvider>
    </>
  )
}

 