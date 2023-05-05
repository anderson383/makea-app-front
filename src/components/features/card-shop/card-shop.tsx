import { View, Text, StyleSheet } from "react-native"

const CardShop = () => {
  return (
    <View style={styles.card_shop}>
      <Text>Carrito de compras</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card_shop: {
    flex: 1
  }
})


export default CardShop