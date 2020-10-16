import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import InfoIcon from '../../../assets/info.png'
import AlertIcon from '../../../assets/alert2x.png'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import NextSection from '../NextSection'
import { setOverviewFormdata } from '../../redux/actions/overviewForm'

const Overview = ({ handleToggle }) => {
  const [date, setdate] = useState(moment(new Date()).format('DD/MM/YYYY'))
  const [message, setmessage] = useState('')
  const [hasError, sethasError] = useState(false)
  const overviewForm = useSelector((state) => state.overviewForm)
  const dispatch = useDispatch()

  useEffect(() => {
    setmessage(overviewForm.message)
    setdate(overviewForm.date)
  }, [])

  const handleSubmit = () => {
    console.log(message,date)
    if (!message || !date) {
      sethasError(true)
      return
    }
    sethasError(false)
    dispatch(setOverviewFormdata(message, date))
    handleToggle && handleToggle(1)
  }

  const inputColor = hasError ? 'red' : '#606afa'

  return (
    <View>
      <View style={styles.row}>
        <Image source={InfoIcon} style={styles.infoIcon} />
        <Text style={styles.infoText}>Lorem ipsum dolar sit amet</Text>
      </View>
      <View style={[styles.row, styles.textarea1Container]}>
        <TextInput
          style={[styles.textarea1, { borderBottomColor: inputColor }]}
          value={message}
          multiline={true}
          numberOfLines={5}
          placeholder="I commit to..."
          onChangeText={(text) => {
            setmessage(text)
          }}
        />
        {hasError && <Image source={AlertIcon} style={styles.alertIcon} />}
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
      <NextSection handleOnpress={handleSubmit} />
      {/* <NextSection handleOnpress={() => handleToggle(1)} /> */}
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
    borderBottomWidth: 1,
    flex: 1,
    fontSize: 20,
    textAlignVertical: 'top',
    marginVertical: 5,
    color: 'gray',
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
