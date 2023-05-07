import { THEME } from "../../..//theme"
import { Text, TouchableOpacity, StyleSheet } from "react-native"

export interface StyledButtonProps {
  text: string,
  onPress?: () => void,
  style?: any,
  testID?: string
}
 const StyledButton:React.FC<StyledButtonProps> = ({text, onPress, style, testID}) => {
  const styleButton = [
    styles.button,
    style
  ]
  return (
    <TouchableOpacity style={styleButton} onPress={onPress} testID={testID}>
      <Text style={{color: THEME.colors.white, fontWeight: 'bold'}}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.colors.secondaryColor,
    borderRadius: 8,
    paddingHorizontal: THEME.paddings.md,
    minHeight: 62
  }
})

export default StyledButton