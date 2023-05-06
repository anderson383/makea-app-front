import { THEME } from "../../..//theme"
import { Text, TouchableOpacity, StyleSheet } from "react-native"

interface StyledButtonProps {
  text: string,
  onPress?: () => void,
  style?: any
}
export const StyledButton:React.FC<StyledButtonProps> = ({text, onPress, style}) => {
  const styleButton = [
    styles.button,
    style
  ]
  return (
    <TouchableOpacity style={styleButton} onPress={onPress}>
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

