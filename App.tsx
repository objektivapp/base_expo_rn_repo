import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Feather, Entypo, AntDesign } from '@expo/vector-icons';
import topBackground from './assets/topBackground.png';
import logo from './assets/logo.png';
import { Overview, Actions, Stake, AccountPartner, SocialSharing} from './components'
export default function App() {
  const [selected, setSelected] = useState(0);
  const section = [
    {title : 'Overview', component : ()=><Overview index={selected} setSelected={setSelected}/>},
    {title : 'Actions', component : ()=><Actions index={selected} setSelected={setSelected}/>},
    {title : 'Stakes', component : ()=><Stake/>},
    {title : 'Accountabilty Partner', component : ()=><AccountPartner/>},
    {title : 'Social Sharing', component : ()=><SocialSharing/>},
  ]
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={topBackground} style={styles.topImage}>
          <Feather name="menu" size={32} color="white" style={styles.icon} />
          <Image source={logo} style={styles.logo} />
      </ImageBackground>
      <Text style={styles.headingT}>  New contract </Text>
      <View style={styles.parentSection}>
      {
        section.map((item,index)=>(
          <View style={index===selected? styles.selectedSection :styles.section}>
              <TouchableOpacity  activeOpacity={1} onPress={()=>setSelected(index)} style={styles.header}>
                <Text style={styles.sectionHeadNumT}> {index+1}.</Text>  
                <Text style={styles.sectionTitleT}> {item.title}</Text>
                <View style={styles.f1}/>
                {index===selected?<AntDesign name='questioncircleo' style={styles.sectionHIcon}/>:
                <Entypo name="chevron-thin-down" style={styles.sectionHIcon} /> 
                 }
              </TouchableOpacity>
              {index===selected&&item.component()}
          </View>
        ))
      }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  logo : {
    alignSelf : 'center',
    marginLeft : '25%'
  },
  icon : {
    marginLeft : 10
  },
  topImage : {
    width : '100%',
    height : 100,
    flexDirection : 'row',
    alignItems: 'center'
  },
  headingT : {
    fontSize : 40,
    color : '#1e1e1e',
    paddingVertical : 20,
    fontFamily : 'Optima'
  },
  parentSection : {
    paddingHorizontal : 20,
    width : '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section : {
    margin : 20,
    marginVertical : 10,
    borderRadius : 20,
    backgroundColor : '#f9f7fe',
    width : '100%'
  },
  selectedSection : {
    margin : 20,
    marginVertical : 10,
    borderRadius : 20,
    backgroundColor : '#eeecfe',
    width : '100%'
  },
  header : {
    flexDirection : 'row',
    alignItems : 'center',
    paddingRight : 10,
    paddingVertical : 10
  },
  sectionHeadNumT : {
    fontWeight : 'bold',
    color : '#1e2e3e',
    fontSize : 20,
    padding : 15,
    paddingLeft : 10,
    paddingRight : 0
  },
  sectionTitleT :{
    color : '#1e2e3e',
    fontSize : 21
  },
  f1:{
    flex:1
  },
  sectionHIcon:{
    color : '#a3a3a3',
    fontSize : 20
  }
});
