import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { IProduct } from "../../../services/models/product"
import { SvgXml } from "react-native-svg"
import { numberFormat } from "../../../helpers/numberCurrency"
import { CloseIcon } from "../../../../assets/icons/close"
import { useDispatch } from "react-redux"
import { updateProductCarSlice } from "../../../core/redux/slices/products.slice"
import { THEME } from "../../../theme"

interface ProductCarProps {
  product: IProduct
}

const ProductCar:React.FC<ProductCarProps> = ({product}) => {

  const dispatch = useDispatch()
  const addCart = (prod: IProduct) => {
    dispatch(updateProductCarSlice({...prod, isAddCart: !prod.isAddCart}))
  }

  return (
    <View key={product.id} style={styles.product_cart}>
      <View style={styles.closed}>
        <TouchableOpacity onPress={() => addCart(product)}>
          <SvgXml xml={CloseIcon}  />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: product.image, width: 87, height: 87 }} style={{borderRadius: 8, overflow: 'hidden'}} />
      <View style={{flex: 1}}>
        <Text style={styles.text}>{product.name}</Text>
        <Text>{product.description}</Text>
      </View>
      <Text style={styles.price}>{numberFormat(product.price)}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  product_cart: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    gap: 16,
    backgroundColor: THEME.colors.white,
    position: 'relative'
  },
  text: {
    fontWeight: 'bold'
  },
  price: {
    color: THEME.colors.secondaryColor,
    fontWeight: 'bold'
  },
  closed: {
    position: 'absolute',
    top: 16,
    right: 16
  }
})
export default ProductCar