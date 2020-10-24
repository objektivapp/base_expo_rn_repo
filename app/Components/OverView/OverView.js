import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Reinput from 'reinput';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import * as Font from 'expo-font';

const win = Dimensions.get('screen');
const themeColor = 'rgb(75,58,255)';
const blackLight = 'rgb(63,63,62)';

export default class OverView extends React.Component {
    constructor(props) {
        super(props);

    }

    async componentDidMount() {
        // load font from the fonts folder
        await Font.loadAsync({
            'raleway-regular': require('../../../fonts/raleway-regular.ttf'),
            'raleway-bold': require('../../../fonts/raleway-bold.ttf')
        });

    }

    render() {
        const { item } = this.props;
        return (
            <View style={styles.expandableitemContainer}>
                <View style={{ flexDirection: 'row', paddingLeft: 3 }}>
                    <Text style={{ flex: 0.95, height: 44, padding: 10, textAlign: 'left', alignSelf: 'flex-start', justifyContent: 'flex-start' }}>
                        <Text style={[styles.item, { fontSize: 18, color: blackLight, textAlign: 'left', fontFamily: 'raleway-bold' }]}>{item.id}. </Text>
                        <Text style={styles.item}>Overview</Text>
                    </Text>
                    <AntDesign name="questioncircleo" color="#9f9fa1" size={18} style={[styles.item, { fontSize: 22, paddingRight: 0, left: 3 }]} />
                </View>

                <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                    <MaterialIcons name="info-outline" color="#000" size={22} style={[styles.item, { fontSize: 22, paddingTop: 2, paddingTop: 0, fontSize: 20 }]} />
                    <Text style={[styles.item, { paddingTop: 0, paddingLeft: 0, alignSelf: 'flex-end', fontSize: 18 }]}>Lorem ipsum dolor sit amet</Text>
                </View>

                <View style={{ width: win.width - 80, justifyContent: 'center', alignSelf: 'center' }}>
                    <Reinput
                        label='i commit to....'
                        multiline={true}
                        minHeight={80}
                        value={this.props.friends.commitInput}
                        onChangeText={(input) => this.props.onChangeInput(input)}
                        numberOfLines={4}
                        labelActiveScale={1}
                        underlineColor={'red'}
                        labelActiveTop={-25}
                        iconOverlay={<MaterialIcons name="info-outline" color="red" size={18} style={{ fontSize: 22, alignSelf: 'flex-end', justifyContent: 'flex-end' }} />}
                    />
                </View>

                <View style={{ flexDirection: 'row', width: win.width - 45 }}>
                    <Text style={[styles.item, { flex: 1, textAlign: 'left', marginLeft: 5 }]}>by </Text>
                    <DatePicker
                        showIcon={false}
                        androidMode="spinner"
                        style={{ width: 200, marginRight: 20, fontFamily: 'raleway-regular', fontSize: 20 }}
                        date={this.props.friends.date}
                        mode="date"
                        placeholder="DD/MM/YYYY"
                        format="DD/MM/YYYY"
                        maxDate={moment().format('DD-MM-YYYY')}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateInput: {
                                borderBottomWidth: 1,
                                borderBottomColor: 'blue',
                                borderWidth: 0,
                                fontFamily: 'raleway-regular',
                                fontSize: 20
                            },
                        }}
                        onDateChange={(date) => {
                            this.props.onChangeDate(date)
                        }}
                    />
                </View>

                <View style={{ alignSelf: 'flex-end', padding: 10, paddingTop: 20, paddingBottom: 15, flexDirection: 'row' }}>
                    <Text style={[styles.item, { color: themeColor, fontFamily: 'raleway-bold', paddingRight: 0, fontSize: 22 }]}>NEXT</Text>
                    <MaterialCommunityIcons name="chevron-double-right" color={themeColor} size={26} style={{ height: 44, padding: 4, paddingLeft: 2, paddingTop: 10 }} />
                </View>
            </View>
        )
    }
}

export const styles = StyleSheet.create({
    expandableitemContainer: {
        flex: 1,
        width: win.width - 30,
        backgroundColor: '#efecff',
        borderRadius: 22,
        padding: 10
    },
    item: {
        padding: 10,
        fontSize: 20,
        height: 44,
        textAlign: 'center',
        fontFamily: 'raleway-regular'
    }
});
