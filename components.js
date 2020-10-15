import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Image } from 'react-native';
import { Feather, Entypo, AntDesign } from '@expo/vector-icons';

export const Overview = ({ setSelected=()=>{}, index = 0 }) => {
    return (
        <View>
            <View style={styles.infoView}>
                <Feather name='info' style={styles.sectioonIc} />
                <Text style={styles.infoText}>Lorem ipsum dolor sit amet </Text>
            </View>
            <Text style={styles.commitT}>I commit to ...</Text>
            <View style={styles.inputTextV}>
                <TextInput style={styles.inputOver} />
                <AntDesign name="exclamationcircleo" style={styles.warnIcon} />
            </View>
            <View style={styles.byView}>
                <Text style={styles.byT}>By</Text>
                <View style={styles.f1} />
                <View style={styles.inputOverBy}>
                    <TextInput style={styles.inputOver} textAlign={'center'} value={'22/08/2020'} />
                </View>
            </View>
            <Text onPress={() => setSelected(index + 1)} style={styles.nextText}>{'NEXT >>'}</Text>
        </View>
    )
}
export const Actions = ({ setSelected=()=>{}, index = 0 }) => {
    return (
        <View>
        <View style={styles.infoView}>
            <Feather name='info' style={styles.sectioonIc} />
            <Text style={styles.infoText}>Lorem ipsum dolor sit amet </Text>
        </View>
        <View style={styles.sectionSubWrap}>
            <View style={styles.actionSubView}>
                <View style={styles.actionSubTextV}>
                <Text style={styles.actionSubText} >{'20 situps'}</Text>
                <View style={styles.f1}/>
                <Feather name="edit-2" style={styles.editIcon}/>
                </View>
                <Text style={styles.actionSubText2} >{'Mon, Wed'}</Text>
            </View>
            <View style={styles.actionSubView}>
                <View style={styles.actionSubTextV}>
                <Text style={styles.actionSubText} >{'Lorem ipsum donor sit amet'}</Text>
                <View style={styles.f1}/>
                <Feather name="edit-2" style={styles.editIcon}/>
                </View>
                <Text style={styles.actionSubText2} >{'Every day'}</Text>
            </View>
        </View>
        <Text onPress={() => setSelected(index + 1)} style={styles.nextText}>{'NEXT >>'}</Text>
    </View>
    )
}
export const Stake = ({ setSelected=()=>{}, index = 0 }) => {
    return (
        <View>

        </View>
    )
}
export const AccountPartner = ({ setSelected=()=>{}, index = 0 }) => {
    return (
        <View>

        </View>
    )
}
export const SocialSharing = ({ setSelected=()=>{}, index = 0 }) => {
    return (
        <View>

        </View>
    )
}

const styles = StyleSheet.create({
    f1: {
        flex: 1
    },
    infoView: {
        flexDirection: 'row',
        padding: 15,
        paddingTop: 0
    },
    sectioonIc: {
        fontSize: 20,
        color: '#1e1e1e',
        paddingRight: 10,
    },
    infoText: {
        fontSize: 17
    },
    commitT: {
        color: '#7a7a7a',
        fontSize: 17,
        paddingLeft: 20,
        paddingVertical: 10,
        paddingTop: 5
    },
    byT: {
        color: '#7a7a7a',
        fontSize: 17,
        paddingRight: 5
    },
    inputTextV: {
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        width: '85%',
        alignSelf: 'center',
    },
    inputOver: {
        height: 40,
        width: '95%'
    },
    warnIcon: {
        fontSize: 17,
        color: 'red'
    },
    byView: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        alignItems: 'center'
    },
    inputOverBy: {
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        width: '70%',
        alignSelf: 'center',
    },
    nextText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'blue',
        alignSelf: 'flex-end',
        paddingRight: 20,
        paddingVertical: 20
    },
    actionSubView:{
        borderRadius : 20,
        borderColor : 'blue',
        borderWidth : 1,
        borderStyle : 'dotted',
        minHeight : 80,
        width : '100%',
        backgroundColor : 'white',
        marginBottom : 15,
        padding : 15,
        paddingVertical : 20
    },
    sectionSubWrap:{
        padding : 15,

    },
    actionSubTextV:{
        flexDirection : 'row',
    },
    actionSubText:{
        fontWeight : 'bold',
        fontSize : 17,
        color : '#1e1e1e'
    },
    editIcon:{
        color : '#feb940',
        fontSize : 19
    },
    actionSubText2:{
        color : 'blue',
        fontSize : 17,
        marginTop : 10
    }
})