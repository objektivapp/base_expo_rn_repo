import React, { useState, useRef, useEffect } from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet, Animated, Easing, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import EditIcon from '../../assets/edit.png'
import DownArraow from '../../assets/down3x.png'
import InfoIcon from '../../assets/help.png'

const AccordionListItem = ({ title, children, edit = false, forceOpen = false, handleToggle }) => {
  const [open, setOpen] = useState(false)
  const animatedController = useRef(new Animated.Value(0)).current
  const [bodySectionHeight, setBodySectionHeight] = useState(0)

  useEffect(() => {
    if (forceOpen != open) {
      toggleListItem()
    }
    return () => {
      open && toggleListItem()
    }
  }, [forceOpen])

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  })

  const toggleListItem = () => {
    if (open) {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 0,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start()
    } else {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 1,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start()
    }
    setOpen(!open)
  }

  const getIcon = () => {
    if (open) {
      return <Image source={InfoIcon} style={styles.infoIcon} resizeMode={'contain'} />
    }
    if (edit) {
      return <Image source={EditIcon} style={styles.editIcon} resizeMode={'contain'} />
    }

    return <Image source={DownArraow} style={styles.downArrow} resizeMode={'contain'} />
  }

  const bodyBackground = !open && edit ? '#606afa' : '#faf7ff'
  const titleColor = !open ? (edit ? '#ffffff' : '#ababad') : '#85848b'

  return (
    <View style={[styles.container, { backgroundColor: bodyBackground }]}>
      <TouchableWithoutFeedback onPress={() => handleToggle && handleToggle()}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
          {getIcon()}
        </View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.bodyBackground, { height: bodyHeight }]}>
        <View style={styles.bodyContainer} onLayout={(event) => setBodySectionHeight(event.nativeEvent.layout.height)}>
          {children}
        </View>
      </Animated.View>
    </View>
  )
}
export default AccordionListItem

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 15,
  },
  bodyBackground: {
    overflow: 'hidden',
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'transparent',
  },
  title: {
    fontSize: 24,
  },
  bodyContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  downArrow: {
    height: 15,
    width: 15,
  },
})
