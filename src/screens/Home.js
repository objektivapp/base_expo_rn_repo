import React from 'react'
import { StyleSheet, ScrollView, Text, View, Image, TextInput } from 'react-native'
import Accordion from '../components/Accordion'
import Header from '../components/Header'
import InfoIcon from '../../assets/info.png'
import AlertIcon from '../../assets/alert2x.png'

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.heading}>New contract</Text>
      <Accordion title={'1. Overview'} edit={true}>
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
            <TextInput style={styles.textarea2} />
          </View>
        </View>
      </Accordion>
      <Accordion title={'2. Actions'} edit={false}>
        <Text>Some body text!</Text>
      </Accordion>
      <Accordion title={'3. Stakes'} edit={false}>
        <Text>Some body text!</Text>
      </Accordion>
      <Accordion title={'4. Accountability Partner'} edit={false}>
        <Text>Some body text!</Text>
      </Accordion>
      <Accordion title={'4. Social Sharing'} edit={false}>
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
  textarea2: {
    borderBottomColor: '#606afa',
    borderBottomWidth: 1,
    flex: 1,
    fontSize: 20,
    marginLeft: 20,
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
