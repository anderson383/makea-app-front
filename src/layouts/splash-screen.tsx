import { LogoIcon } from "../../assets/icons/logo";
import { THEME } from "../theme";
import { View, Text, StyleSheet } from "react-native"
import { SvgXml } from "react-native-svg"

export const SplashCustomScreen = () => {
  
  return (
    <View style={styles.splash}>
      <SvgXml width={300} xml={LogoIcon} />
    </View>
  )
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: THEME.colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center'
  }
});