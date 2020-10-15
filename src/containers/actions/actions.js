import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { NextButton } from "../../components";
import { colors } from "../../theme";
import styles from "./actionsStyle";


export const Actions = (props) => {
    const data = useSelector(state => state.data.data);
    const actions = data.filter((item) => item.id === 2)

    const renderItems = (item, index) => {
        return (
            <View key={index} style={styles.itemContainer}>
                <View style={styles.itemWrapper}>
                    <View style={{ flex: 9 }}>
                        <Text style={styles.itemTitle} >{item.title}</Text>
                        <Text style={styles.itemDaysDetails} >{item.days}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image style={styles.editIcon} source={require("../../../assets/edit.png")} />
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={{ width: "100%" }}>
            <View style={styles.infoContainer}>
                <Image style={styles.infoIcon} source={require("../../../assets/info.png")} />
                <Text style={{ color: colors.lightGrey }}>Lorem ipsum dolor sit amet</Text>
            </View>
            {actions && actions.length && actions[0].data.map((item, index) => renderItems(item, index))}
            <View style={styles.nextButtonContainer}>
                <NextButton onNextClick={() => console.log("next event will be launched ")} />
            </View>
        </View>
    )
}