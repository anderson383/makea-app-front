import { THEME } from "../../../theme"
import { SuccessIcon } from "../../../../assets/icons/success"
import { View, StyleSheet, Text } from "react-native"
import { SvgXml } from "react-native-svg"
import { StyledButton } from "../../ui/button/button"
import { useNavigate } from "react-router-native"  

const SuccessPay = () => {
  const navigate = useNavigate()
  
  return (
    <View style={styles.success}>
      <View style={styles.info}>
        <SvgXml xml={SuccessIcon} />
        <Text style={styles.text}>
          Tu orden será entregada en los proximos 5 dias, mas detalles del rastreo del pedido por correo.
          Gracias por tu compra! :)
        </Text>
        <StyledButton text="Continuar comprando"  style={styles.button} onPress={() => navigate('/')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  success: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    gap: THEME.paddings.md
  },
  text: {
    textAlign:'center'
  },
  button: {
    marginTop: THEME.paddings.md
  }
})

export default SuccessPay