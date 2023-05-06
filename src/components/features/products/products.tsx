import { View, Text, StyleSheet, FlatList, ScrollView, Image } from "react-native"
import Constants from 'expo-constants'
import useProductsRepository from "../../../hooks/repositories/useProductsRepository"
import { useEffect } from "react"
import { IProduct } from "../../../services/models/product";
import { THEME } from "./../../../theme";
import Product from "../../ui/product";
import { useDispatch, useSelector } from "react-redux";
import { loadProductsSlice, updateProductCarSlice } from "../../../core/redux/slices/products.slice";
import Header from "../../ui/header";
import { IrootState } from "../../../core/redux/models/root";


const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector<IrootState, IProduct[]>(state => (state.product.products))
  const repository = useProductsRepository()

  useEffect(() => {
    repository.list().then(respProd => {
      dispatch(
        loadProductsSlice(
          respProd.map(item => products.find(cart => (item.id === cart.id)) || item)
        )
      )
    })
  }, [])

  const addCart = (prod: IProduct) => {
    dispatch(updateProductCarSlice({...prod, isAddCart: !prod.isAddCart}))
  }

  return (
    <>
      <View style={styles.products}>
        <Header title="Catalogo" />
        <ScrollView >
          <View style={styles.list}>
          {
            products.map((product) => (
              <Product
                key={product.id}
                product={product}
                onClickHeart={() => addCart(product)}
              />
            ))
          }
          </View>
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  products: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    gap: THEME.paddings.sm,
    paddingHorizontal: THEME.paddings.md
  },
  product: {
    marginRight: 3,
    borderRadius: 10,
    width: '100%',
    maxWidth: 172,
    overflow: 'hidden',
    borderColor: '#f1f1f1',
    borderWidth: 1,
  },
  info: {
    padding: 8,
    position: 'relative',
    gap: THEME.paddings.sm
    // backgroundColor: 'white'
  },
  priceContent: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  price: {
    color: THEME.colors.secondaryColor,
    fontWeight: 'bold'
  }
})

export default Products