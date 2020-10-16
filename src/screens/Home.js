import React, { useState } from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native'
import Accordion from '../components/Accordion'
import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { setOpenSection } from '../redux/actions/openSection'
import Overview from '../components/newContractSections/Overview'
import Action from '../components/newContractSections/Action'

function HomeScreen({ navigation }) {
  const openSection = useSelector((state) => state.openSection)
  const dispatch = useDispatch()

  const handleToggle = (value = -1) => {
    value = openSection == value ? '-1' : value
    dispatch(setOpenSection(value))
  }
  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.heading}>New contract</Text>
      <Accordion title={'1. Overview'} edit={true} forceOpen={openSection == 0} handleToggle={() => handleToggle(0)}>
        <Overview handleToggle={handleToggle} />
      </Accordion>
      <Accordion title={'2. Actions'} edit={false} forceOpen={openSection == 1} handleToggle={() => handleToggle(1)}>
        <Action handleToggle={handleToggle} />
      </Accordion>
      <Accordion title={'3. Stakes'} edit={false} forceOpen={openSection == 2} handleToggle={() => handleToggle(2)}>
        <Text>Some body text!</Text>
      </Accordion>
      <Accordion title={'4. Accountability Partner'} edit={false} forceOpen={openSection == 3} handleToggle={() => handleToggle(3)}>
        <Text>Some body text!</Text>
      </Accordion>
      <Accordion title={'4. Social Sharing'} edit={false} forceOpen={openSection == 4} handleToggle={() => handleToggle(4)}>
        <Text>Some body text!</Text>
      </Accordion>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 40,
    textAlign: 'center',
    paddingVertical: 15,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
})
