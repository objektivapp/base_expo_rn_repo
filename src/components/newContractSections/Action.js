import React from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import InfoIcon from '../../../assets/info.png'
import PlusIcon from '../../../assets/plus.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import EditIcon from '../../../assets/edit.png'
import NextSection from '../NextSection'

const Action = ({ handleToggle }) => {
  return (
    <View>
      <View style={styles.row}>
        <Image source={InfoIcon} style={styles.infoIcon} />
        <Text style={styles.infoText}>Lorem ipsum dolar sit amet</Text>
      </View>
      <View style={styles.actionBlock}>
        <View style={[styles.row, styles.actionBlockTitleContainer]}>
          <Text style={styles.actionBlockTitle}>20 situps</Text>
          <Image source={EditIcon} style={styles.editIcon} resizeMode={'contain'} />
        </View>
        <Text style={styles.actionDate}>Mo,Wed</Text>
      </View>
      <View style={styles.actionBlock}>
        <View style={[styles.row, styles.actionBlockTitleContainer]}>
          <Text style={styles.actionBlockTitle}>Lorem ipsum dolar sit amet</Text>
          <Image source={EditIcon} style={styles.editIcon} resizeMode={'contain'} />
        </View>
        <Text style={styles.actionDate}>Every day</Text>
      </View>

      <TouchableOpacity style={styles.addMore}>
        <Image source={PlusIcon} style={styles.plusIcon} />
      </TouchableOpacity>
      <NextSection handleOnpress={() => handleToggle(2)} />
    </View>
  )
}

export default Action

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  infoIcon: {
    height: 18,
    width: 18,
    marginRight: 10,
  },
  infoText: {
    fontSize: 18,
  },

  addMore: {
    marginVertical: 10,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fdb841',
    width: 25,
    height: 25,
    justifyContent: 'center',
    borderRadius: 50,
  },
  actionBlock: {
    borderWidth: 1,
    borderRadius: 18,
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#ffffff',
    borderStyle: 'dashed',
    borderColor: '#606afa',
  },
  actionBlockTitleContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionBlockTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  actionDate: {
    color: '#606afa',
    fontSize: 18,
  },
})
