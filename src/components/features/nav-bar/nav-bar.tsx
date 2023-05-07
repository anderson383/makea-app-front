
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, TouchableOpacity } from "react-native"
import HomeIcon from "../../../../assets/icons/home";
import StoreIcon from "../../../../assets/icons/store";
import { THEME } from "../../../theme";
import { IProduct } from "../../../services/models/product";
import { IrootState } from "../../../core/redux/models/root";
import { useSelector } from "react-redux";
import { EatIcon } from "../../../../assets/icons/eat";
import LinkNav from "../../ui/link";


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