
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from "react-native"
import { Link, useLocation } from 'react-router-native'
import { SvgXml } from 'react-native-svg';
import HomeIcon from "../../../../assets/icons/home";
import StoreIcon from "../../../../assets/icons/store";
import { THEME } from "../../../theme";
interface LinkNavProps {
  children?: React.ReactNode,
  to: string,
  icon: (color?:string) => string
}

const LinkNav:React.FC<LinkNavProps> = ({children, to, icon }) => {
  const  {pathname} = useLocation()
  const active = pathname === to
  const textStyles = [
    styles.link,
  ]
  return (
    <Link to={to} style={textStyles} underlayColor={'#ffffff0'}>
      <Text>
        {/* {children && children} */}
        <SvgXml height={23} width={23}  xml={icon(active ? THEME.colors.secondaryColor : undefined)} />
      </Text>
    </Link>
  )
}

const NavBar = () => {
  return (
    <>
      <View style={styles.navBar}>
        <View style={styles.links}>
          <LinkNav to="/" icon={HomeIcon} />
          <LinkNav to="/card-shop"  icon={StoreIcon} />
          <LinkNav to="/"  icon={StoreIcon} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#ffffff',
    marginBottom: 16,
    marginHorizontal: 16,
    height: 90,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    elevation: 20,
    shadowColor: '#52006A',
  },
  links: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 16,
  },
  link: {
    padding: 16
  },
  active: {

  }
})
export default NavBar