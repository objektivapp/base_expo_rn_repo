import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
const NextSection = ({ handleOnpress }) => {
  return (
    <TouchableOpacity style={[styles.row, styles.submitContainer]} onPress={() => handleOnpress && handleOnpress()}>
      <Text style={styles.nextBtnText}>NEXT </Text>
      <FontAwesome name="angle-double-right" size={24} color="#606afa" />
    </TouchableOpacity>
  )
}

export default NextSection

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  submitContainer: {
    paddingVertical: 10,
    justifyContent: 'flex-end',
  },
  nextBtnText: {
    color: '#606afa',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
