import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'

import InfoIcon from '../../../assets/info.png'
import AlertIcon from '../../../assets/alert2x.png'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import NextSection from '../NextSection'

const Overview = ({ handleToggle }) => {
  const [date, setdate] = useState(moment(new Date()).format('DD/MM/YYYY'))

  return (
    <View>
      <View style={styles.row}>
        <Image source={InfoIcon} style={styles.infoIcon} />
        <Text style={styles.infoText}>Lorem ipsum dolar sit amet</Text>
      </View>
      <View style={[styles.row, styles.textarea1Container]}>
        <TextInput style={styles.textarea1} multiline={true} numberOfLines={5} placeholder="I commit to..." />
        <Image source={AlertIcon} style={styles.alertIcon} />
      </View>
      <View style={styles.row}>
        <Text>by </Text>
        <DatePicker
          style={{ width: '100%' }}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          showIcon={false}
          customStyles={{
            dateInput: {
              marginHorizontal: 15,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderBottomColor: '#606afa',
            },
          }}
          onDateChange={(date) => {
            setdate(date)
          }}
        />
      </View>
      <NextSection handleOnpress={() => handleToggle(1)} />
    </View>
  )
}

export default Overview

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
  textarea1: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    flex: 1,
    fontSize: 20,
    textAlignVertical: 'top',
  },

  textarea1Container: {
    position: 'relative',
  },
  alertIcon: {
    position: 'absolute',
    height: 20,
    width: 20,
    right: 0,
    bottom: 10,
  },
})
