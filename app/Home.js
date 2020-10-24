import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Dimensions, TouchableOpacity, Image, ImageBackground, LogBox } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { createStore } from 'redux';
import friendsReducer from '../src/redux/reducer';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAction, onSelectItem, onChangeInput, onChangeDate, onAssetsLoad } from '../src/redux/actions';
import * as Font from 'expo-font';
import OverView from './Components/OverView';
import Actions from './Components/Actions';

const win = Dimensions.get('screen');
const store = createStore(friendsReducer);
const themeGray = 'rgb(163,164,163)';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.contract = [
            { id: 1, name: 'Overview' },
            { id: 2, name: 'Actions' },
            { id: 3, name: 'Stakes' },
            { id: 4, name: 'Accountability partner' },
            { id: 5, name: 'Social sharing' },
        ]
    }

    async componentDidMount() {
        // load font from the fonts folder
        await Font.loadAsync({
            'raleway-regular': require('../fonts/raleway-regular.ttf'),
            'raleway-bold': require('../fonts/raleway-bold.ttf')
        });

        this.props.onAssetsLoad(true);

        LogBox.ignoreAllLogs();
    }

    onExpandItem = (item) => {
        // call action onSelectItem
        const { commitInput, date } = this.props.friends;

        if (commitInput !== '' && date !== null) {
            this.setState({ isCompletedId: 1 })
            this.props.onSelectItem(item.id, 1)
        } else {
            this.props.onSelectItem(item.id, null)
        }

    };


    // contactList render item
    ItemView = ({ item, index }) => {
        return (
            <>
                {this.props.friends.selectedItem == 1 && item.id == 1
                    &&
                    <OverView
                        {...this.props}
                        item={item}
                    />
                }

                {/* // for index == 2 */}
                {this.props.friends.selectedItem == 2 && item.id == 2
                    &&
                    <Actions
                        {...this.props}
                        item={item}
                    />
                }

                {this.props.friends.selectedItem != item.id
                    ?
                    <TouchableOpacity style={this.props.friends.isCompletedId === item.id ? [styles.itemContainer, { backgroundColor: 'rgb(75,58,255)' }] : styles.itemContainer} onPress={() => this.onExpandItem(item)}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.contractitemContainer}>
                                <Text
                                    style={[styles.contractitem, {
                                        fontFamily: 'raleway-bold', marginRight: 5, alignSelf: 'flex-end',
                                        color: this.props.friends.isCompletedId === item.id ? 'white' : themeGray
                                    }]}
                                    onPress={() => this.onExpandItem(item)}>
                                    {item.id}.
                                        </Text>
                                <Text
                                    style={[styles.contractitem, {
                                        color: this.props.friends.isCompletedId === item.id ? 'white' : themeGray
                                    }]}
                                    onPress={() => this.onExpandItem(item)}>
                                    {item.name}
                                </Text>
                            </View>
                            {this.props.friends.isCompletedId === item.id
                                ?
                                <Feather name="edit-2" color="#fff" size={18} style={[styles.item, { fontSize: 22, justifyContent: 'center', alignSelf: 'center' }]} />
                                :
                                <Feather name="chevron-down" color={themeGray} size={22} style={{ justifyContent: 'center', alignSelf: 'center' }} />
                            }
                        </View>
                    </TouchableOpacity>
                    :
                    <>
                        {this.props.friends.selectedItem != 1 && this.props.friends.selectedItem != 2
                            &&
                            <TouchableOpacity style={styles.itemContainer} onPress={() => this.onExpandItem(item)}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.contractitemContainer}>
                                        <Text
                                            style={[styles.contractitem, { fontFamily: 'raleway-bold', marginRight: 5, alignSelf: 'flex-end' }]}
                                            onPress={() => this.onExpandItem(item)}>
                                            {item.id}.
                                        </Text>
                                        <Text
                                            style={styles.contractitem}
                                            onPress={() => this.onExpandItem(item)}>
                                            {item.name}
                                        </Text>
                                    </View>
                                    <Feather name="chevron-down" color={themeGray} size={22} style={{ justifyContent: 'center', alignSelf: 'center' }} />
                                </View>
                            </TouchableOpacity>
                        }

                    </>
                }

            </>
        );
    };

    // contactList Separator
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

    render() {
        return (
            <Provider store={store}>

                <SafeAreaView style={{ flex: 1, width: '100%' }}>
                    {!this.props.friends.assetsLoaded
                        ?
                        <AppLoading />
                        :
                        <>
                            <View>
                                <ImageBackground source={require('../assets/topBackground.png')} style={styles.topCurve} >
                                    <Feather name="menu" color="#fff" size={30} style={{
                                        justifyContent: 'flex-end', alignSelf: 'flex-start', padding: 10, zIndex: 99,
                                        top: 50
                                    }} />
                                    <View style={{ flex: 1 }}>
                                        <Image source={require('../assets/logo.png')} style={{
                                            justifyContent: 'center', alignSelf: 'center', padding: 10, zIndex: 99,
                                            top: 60,
                                            left: -30
                                        }} />
                                    </View>

                                </ImageBackground>
                            </View>
                            <View style={styles.container}>
                                <Text style={[styles.titleText, { fontFamily: 'raleway-regular' }]}>New contract</Text>
                                <FlatList
                                    data={this.contract}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={this.ItemView}
                                    ItemSeparatorComponent={this.ItemSeparatorView}
                                    showsVerticalScrollIndicator={false}
                                />
                            </View>
                        </>
                    }

                </SafeAreaView>
            </Provider>

        )
    }
}

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    topCurve: {
        width: win.width,
        marginTop: -60,
        height: 130,
        marginBottom: 20,
        flexDirection: 'row'
    },
    titleText: {
        fontSize: 38,
        textAlign: 'center',
        paddingBottom: 22,
        fontFamily: 'raleway-regular'
    },
    itemContainer: {
        height: 70,
        width: win.width - 30,
        justifyContent: 'center',
        backgroundColor: '#f9f7ff',
        borderRadius: 22,
    },
    item: {
        padding: 10,
        fontSize: 20,
        height: 44,
        textAlign: 'center',
        fontFamily: 'raleway-regular'
    },
    contractitemContainer: {
        padding: 10,
        paddingLeft: 25,
        flex: 0.92,
        flexDirection: 'row',
        alignItems: 'center'
    },
    contractitem: {
        fontSize: 20,
        height: 44,
        textAlign: 'left',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: 'raleway-regular',
        color: themeGray
    }
});

const mapStateToProps = (state) => {
    const { friends } = state
    return { friends }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addAction,
        onSelectItem,
        onChangeInput,
        onChangeDate,
        onAssetsLoad
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);