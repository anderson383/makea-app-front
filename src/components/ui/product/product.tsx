import { View, Text, StyleSheet, FlatList, ScrollView, Image, Button, TouchableNativeFeedback, TouchableOpacity } from "react-native"
import { THEME } from "./../../../theme";
import { SvgXml } from 'react-native-svg';
import { IProduct } from "../../../services/models/product";
import { numberFormat } from "../../../helpers/numberCurrency";
import {HeartIcon, HeartIconActive} from "../../../../assets/icons/heart";

interface ProductProps {
  product: IProduct
  onClickHeart?: () => void
}

const Product:React.FC<ProductProps> = ({product, onClickHeart}) => {

  const onClick = () => {

  }
  
  return (
    <View style={styles.product} key={product.id}>
      <View style={{flex: 1}}>
        <Image source={{ uri: product.image, height: 150, width: '100%' }} />
      </View>
      <View style={styles.info} >
        <View style={styles.priceContent}>
          <Text style={styles.price}>{numberFormat(product.price)}</Text>
          <TouchableOpacity  onPress={onClickHeart && onClickHeart}>
            { product.isAddCart ?  <SvgXml  xml={HeartIconActive()}  /> : <SvgXml  xml={HeartIcon()}  />} 
            
          </TouchableOpacity>
        </View>
        <View>
        <Text>{product.name}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default Product;