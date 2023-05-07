import { SvgXml } from 'react-native-svg'
import SearchIcon from '../../../../assets/icons/search'
import { THEME } from '../../../theme'
import { View, Text, StyleSheet } from 'react-native' 

export interface HeaderProps {
  title: string
}
const Header:React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title} >{title}</Text>
      <SvgXml xml={SearchIcon()} />
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    height: 73,
    backgroundColor: THEME.colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: THEME.paddings.md
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold'
  },
})


export default Header