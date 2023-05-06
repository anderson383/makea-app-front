
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, TouchableOpacity } from "react-native"
import { Link, useLocation } from 'react-router-native'
import { SvgXml } from 'react-native-svg';
import HomeIcon from "../../../../assets/icons/home";
import StoreIcon from "../../../../assets/icons/store";
import { THEME } from "../../../theme";
import { IProduct } from "../../../services/models/product";
import { IrootState } from "../../../core/redux/models/root";
import { useSelector } from "react-redux";
import { EatIcon } from "../../../../assets/icons/eat";
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
    <TouchableOpacity>
      <Link to={to} style={textStyles} underlayColor={'#ffffff0'}>
        <>
          {children}
          <Text>
            <SvgXml height={23} width={23}  xml={icon(active ? THEME.colors.secondaryColor : undefined)} />
          </Text>
        </>
      </Link>
    </TouchableOpacity>
  )
}

const NavBar = () => {
  const products = useSelector<IrootState, IProduct[]>(state => (state.product.products))
  return (
    <>
      <View style={styles.navBar}>
        <View style={styles.links}>
          <LinkNav to="/" icon={HomeIcon} />
          <LinkNav to="/home-life"  icon={EatIcon} />
          <LinkNav to="/card-shop"  icon={StoreIcon}>
            {
              products.length > 0 && <View style={styles.counter} />
            }
          </LinkNav>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    height: 80,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  links: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 16,
  },
  
  link: {
    padding: 16,
    position: 'relative',
  },
  counter: {
    top: 5,
    right: 7,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    textAlign: 'center',
    minWidth: 12,
    minHeight: 12,
    backgroundColor: THEME.colors.secondaryColor
  },
  number: {
    color: THEME.colors.white,
    lineHeight: 17,
    fontWeight: 'bold'
  },
})
export default NavBar