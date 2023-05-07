import { View, Text, StyleSheet, FlatList, ScrollView, Image } from "react-native"
import Constants from 'expo-constants'
import useProductsRepository from "../../../hooks/repositories/useProductsRepository"
import { useEffect, useState } from "react"
import { IProduct } from "../../../services/models/product";
import { THEME } from "./../../../theme";
import Product from "../../ui/product";
import { useDispatch, useSelector } from "react-redux";
import { loadProductsSlice, updateProductCarSlice } from "../../../core/redux/slices/products.slice";
import Header from "../../ui/header";
import { IrootState } from "../../../core/redux/models/root";
import { useNavigate } from "react-router-native";

interface ProductsProps {
  title: string,
  code: string
}

const Products:React.FC<ProductsProps> = ({title, code}) => {
  const navigation = useNavigate()
  const dispatch = useDispatch()
  const productsStore = useSelector<IrootState, IProduct[]>(state => (state.product.products))
  const [products, setProducts] = useState<IProduct[]>([])
  const repository = useProductsRepository()

  useEffect(() => {
    repository.list(code).then(respProd => {
      setProducts( respProd.map(item => productsStore.find(cart => (item.id === cart.id)) || item))
    })
  }, [code])

  const addCart = (prod: IProduct) => {
    const updateProd = {...prod, isAddCart: !prod.isAddCart }
    
    setProducts((lastState) => (lastState.map(prodItem => prodItem.id === prod.id ? updateProd : prodItem) ))
    dispatch(updateProductCarSlice(updateProd))
  }

  const redirectDetail = (id:string) => navigation('/detail/' + id)

  return (
    <>
      <View style={styles.products}>
        <Header title={title}/>
        <ScrollView >
          <View style={styles.list}>
          {
            products.map((product) => (
              <Product
                key={product.id}
                product={product}
                onClickHeart={() => addCart(product)}
                onClickCard={() => redirectDetail(product.id)}
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
    width: '100%',
    gap: THEME.paddings.sm,
    paddingHorizontal: THEME.paddings.md
  },
})

export default Products