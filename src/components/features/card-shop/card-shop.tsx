import { View, ScrollView, StyleSheet, Text, Image, Button, TouchableOpacity } from "react-native"
import Constants from 'expo-constants'
import Header from "../../ui/header/header"
import { useDispatch, useSelector } from "react-redux"
import { IrootState } from "../../../core/redux/models/root"
import { IProduct } from "@/src/services/models/product"
import { THEME } from "../../../theme"
import { numberFormat } from "../../../helpers/numberCurrency"
import { useEffect, useState } from "react"
import ProductCar from "../../ui/product_cart/product_car"
import StyledButton from "../../ui/button/button"
import { loadProductsSlice } from "../../../core/redux/slices/products.slice";

import {useNavigate} from 'react-router-native'
const CardShop = () => {

  
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const products = useSelector<IrootState, IProduct[]>(state => (state.product.products))
  const [totalPrice, serTotalPrice] = useState(0)
  useEffect(() => {
    serTotalPrice(products.reduce((prev, curr) => (curr.price + prev), 0))
  }, [products])

  const continueBuying = () => {
    dispatch(loadProductsSlice([]))
    navigate('/success-pay')
  }

  return (
    <View style={styles.card_shop}>
      <Header title="Carrito" />
      <ScrollView style={styles.container}>
        {
          totalPrice ? (
            <>
              <View style={styles.content_products}>
                { products.map(prod => <ProductCar key={prod.id} product={prod} />) }
              </View>
              <View style={styles.info_pay}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', gap: THEME.paddings.sm }}>
                  <Text>Total:</Text>
                  <Text
                   style={styles.price_total}>{numberFormat(totalPrice)}</Text>
                </View>
                <View style={{flex: 1}}>
                  <StyledButton text="Pagar ahora" onPress={continueBuying} testID="buttonBuy" />
                </View>
              </View>
            </>
          ) : (
            <View style={{alignItems: 'center'}}>
              <Text>No hay elementos</Text>
            </View>
          )
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  card_shop: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  container: {
    padding: 16,
    backgroundColor: THEME.colors.gray,
    
  },
  content_products: {
    gap: THEME.paddings.md
  },
  price_total: {
    color: THEME.colors.secondaryColor,
    fontSize: 20,
    fontWeight: 'bold'
  },
  info_pay: { 
    marginTop: THEME.margins.md,
    flexDirection: 'row'
  }
})

export default CardShop