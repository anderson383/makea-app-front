import { THEME } from "../../../theme"
import { Text, TouchableOpacity, StyleSheet, View } from "react-native"
import { SvgFromXml } from "react-native-svg"
import { Link, useLocation, useNavigate } from "react-router-native"

interface LinkNavProps {
  children?: React.ReactNode,
  to: string,
  icon: (color?:string) => string
}


const LinkNav:React.FC<LinkNavProps> = ({children, to, icon }) => {
  const  {pathname} = useLocation()
  const navigate = useNavigate()
  const active = pathname === to
  const textStyles = [
    styles.link,
  ]
  return (
    <TouchableOpacity onPress={() =>navigate(to)} testID="link-to">
      <View style={textStyles} >
        <>
          {children}
          <Text>
            <SvgFromXml height={23} width={23}  xml={icon(active ? THEME.colors.secondaryColor : undefined)} />
          </Text>
        </>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    padding: 16,
    position: 'relative',
  }
})

export default LinkNav