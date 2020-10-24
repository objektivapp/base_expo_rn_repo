import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';

const win = Dimensions.get('screen');
const themeColor = 'rgb(75,58,255)';
const blackLight = 'rgb(63,63,62)';

export default class Actions extends React.Component {
    constructor(props) {
        super(props);

        this.actionFotterView = this.actionFotterView.bind(this);
    }

    async componentDidMount() {
        // load font from the fonts folder
        await Font.loadAsync({
            'raleway-regular': require('../../../fonts/raleway-regular.ttf'),
            'raleway-bold': require('../../../fonts/raleway-bold.ttf')
        });

    }

    actionItemView = ({ item, index }) => {
        return (
            <View style={{
                height: 90, width: win.width - 77, justifyContent: 'center', flexDirection: 'row', backgroundColor: '#fff',
                borderRadius: 20,
                alignItems: 'center',
                alignSelf: 'center',
                borderStyle: 'dotted',
                borderWidth: 1,
                borderColor: themeColor
            }}>
                <View style={{ flex: 0.95 }}>
                    <Text style={[styles.actionitemText, { marginBottom: 5 }]}>{item.name}</Text>
                    <Text style={[styles.actionitemText, { fontSize: 16, color: 'blue' }]}>{item.duration}</Text>
                </View>
                <Feather name="edit-2" color="#ffb841" size={18} style={[styles.item, { fontSize: 20 }]} />
            </View>
        )
    }

    ItemSeparatorView = () => {
        return (
            <View
                style={{
                    height: 7,
                    width: '100%',
                }}
            />

        );
    };

    onNewaction = (index) => {
        // call action addAction
        this.props.addAction(index)
    }

    actionFotterView = () => {
        return (
            <TouchableOpacity style={{ marginTop: 8 }} onPress={() => this.onNewaction()}>
                <MaterialIcons name="add-circle" color="#ffb841" size={30} style={{ justifyContent: 'center', alignSelf: 'center', padding: 10 }} />
            </TouchableOpacity>
        );
    };

    render() {
        const { item } = this.props;
        return (
            <View style={styles.expandableitemContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ flex: 0.95, height: 44, padding: 10, paddingLeft: 13 }}>
                        <Text style={[styles.item, { fontSize: 18, color: blackLight, fontFamily: 'raleway-bold', textAlign: 'left' }]}>{item.id}. </Text>
                        <Text style={styles.item}>{item.name}</Text>
                    </Text>
                    <AntDesign name="questioncircleo" color="#9f9fa1" size={18} style={[styles.item, { fontSize: 22, paddingRight: 0, left: 1 }]} />
                </View>

                <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
                    <MaterialIcons name="info-outline" color="#9f9fa1" size={18} style={[styles.item, { fontSize: 22 }]} />
                    <Text style={styles.item}>Lorem ipsum dolor sit amet</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <FlatList
                        data={this.props.friends.possible}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.actionItemView}
                        ItemSeparatorComponent={this.ItemSeparatorView}
                        ListFooterComponent={this.actionFotterView()}
                    />
                </View>

                <View style={{ alignSelf: 'flex-end', padding: 10, paddingTop: 15, paddingBottom: 15, flexDirection: 'row' }}>
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
    },
    actionitemText: {
        fontSize: 20,
        height: 25,
        textAlign: 'left',
        paddingLeft: 8,
        fontFamily: 'raleway-regular'
    }
});
