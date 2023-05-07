import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from "react-native"
import Constants from 'expo-constants'
import {useEffect, useState} from 'react'
import { THEME } from "../../../theme"
import { useParams } from "react-router-native"
import useProductsRepository from "../../../hooks/repositories/useProductsRepository"
import { IProduct } from "../../../services/models/product"
import { numberFormat } from "../../../helpers/numberCurrency"
import { SvgXml } from "react-native-svg"
import { HeartIcon, HeartIconActive } from "../../../../assets/icons/heart"
import { updateProductCarSlice } from "../../../core/redux/slices/products.slice"
import { useDispatch, useSelector } from "react-redux"
import { IrootState } from "../../../core/redux/models/root"

export const DetailProduct = () => {
  const repository = useProductsRepository()
  const products = useSelector<IrootState, IProduct[]>(state => (state.product.products))
  const location = useParams<{id: string}>()
  const dispatch = useDispatch()
  const [product, setProduct] = useState<IProduct>()

  useEffect(() => {
    repository.get(location.id).then(response => {
      const prod = products.find(e=> e.id === response.id)
      setProduct(prod ? { ...response, isAddCart: prod.isAddCart } : response)
    })
  }, [])

  const addCart = () => {
    const updateProd = {...product, isAddCart: !product.isAddCart }
    setProduct(updateProd)
    dispatch(updateProductCarSlice(updateProd))
  }

  return (
    <View style={styles.detail_product}>
      {
      product && (
        <ScrollView>
          <View>
            <Image source={{ uri: product.image, height: 470 }} style={{width: '100%'}} />
          </View>
          <View style={styles.container} >
            <View style={styles.info}>
              <TouchableOpacity  onPress={addCart} testID="addCart">
                <View style={styles.iconHeart}>
                  { product.isAddCart ? <SvgXml xml={HeartIconActive() } /> : <SvgXml xml={HeartIcon()} /> }
                </View>
              </TouchableOpacity>
              <Text style={styles.title}>{product.name}</Text>
              <Text style={styles.price}>{numberFormat(product.price)}</Text>
            </View>
            <View>
              <Text>{product.description}</Text>
            </View>
          </View>
        </ScrollView>
      )
    }
    </View>
  )
}

const styles = StyleSheet.create({
  detail_product: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  container: {
    padding: THEME.paddings.md,
    gap: 32
  },
  iconBack: {
    position: 'absolute',
    top: 80,
    left: 50
  },
  info: {
    gap: THEME.paddings.sm,
    position: 'relative'
  },
  iconHeart: {
    position: 'absolute',
    height: 16,
    width: 16,
    top: 0,
    right: 0
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    width: '70%'
  },
  price: {
    color: THEME.colors.secondaryColor,
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default DetailProduct