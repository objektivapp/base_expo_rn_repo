import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Logo from '../../assets/logo.png'
import backgroundImage from '../../assets/topBackground.png'

const Header = ({ navigation }) => {
  const openDrawer = () => {
    navigation.openDrawer()
  }
  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.image} />
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.menuIcon} onPress={openDrawer}>
          <Ionicons name="ios-menu" size={40} color="white" />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} resizeMode={'contain'} />
        </View>
        <View style={styles.empty} />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: 85,
    position: 'relative',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    position: 'absolute',
    bottom: -8,
  },
  innerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  menuIcon: {
    flex: 0.2,
  },
  logo: {},
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    flex: 0.2,
  },
})
