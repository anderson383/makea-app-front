import { View, Text, StyleSheet, FlatList, ScrollView, Image } from "react-native"
import Constants from 'expo-constants'
import useProductsRepository from "../../../hooks/repositories/useProductsRepository"
import { useEffect, useState } from "react"
import { IProduct } from "@/src/services/models/product";
import { THEME } from "./../../../theme";
import { SvgXml } from 'react-native-svg';
import SearchIcon from "../../../../assets/icons/search";
import Product from "../../ui/product/product";
import { useDispatch, useSelector } from "react-redux";
import { updateProductCarSlice } from "../../../core/redux/slices/products.slice";
import { IrootState } from "@/src/core/redux/models/root";


const Products = () => {
  const dispatch = useDispatch()
  const selector = useSelector<IrootState>(state => (state.product.products))
  const repository = useProductsRepository()
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    repository.list().then(response => {
      setProducts(response)
    })
  }, [])
  
  const addCart = (prod: IProduct) => {
    const mapProducts = products.map(prodItem=> prodItem.id === prod.id ? {...prodItem, isAddCart: !prodItem.isAddCart} : prodItem)
    setProducts(mapProducts)
    dispatch(updateProductCarSlice(prod))
  }

  return (
    <>
      <View style={styles.products}>
        <View style={styles.header}>
          <Text style={styles.title} >Catalogo</Text>
          <SvgXml xml={SearchIcon()} />
        </View>
        {/* <FlatList style={styles.list} data={products}  renderItem={({item:product}) => (
          <View style={styles.product}>
            <Text>Listado xd {product.name}</Text>
          </View>
        )}>
        </FlatList> */}

        <ScrollView >
          <View style={styles.list}>
          {
            products.map((product) => (
              <Product
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
  header: {
    height: 73,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    fontSize: 35,
    fontWeight: THEME.fontWeights.bold
  },
  products: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    padding: 16
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    gap: THEME.paddings.sm
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
    fontWeight: THEME.fontWeights.bold
  }
})

export default Products