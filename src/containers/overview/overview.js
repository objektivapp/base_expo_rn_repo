import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import DatePicker from 'react-native-datepicker'
import { useDispatch, useSelector } from "react-redux";
import { InputField, NextButton } from "../../components";
import { colors } from "../../theme";
import styles from "./overviewStyle";


export const Overview = (props) => {
    const [date, setDate] = useState(null);
    const [text, setText] = useState("");


    const onNextClick = () => {
        props.onNext()
    }

    const renderNext = () => {
        if (date && text) {
            return (
                <NextButton onNextClick={() => onNextClick()} />
            )
        } else return null
    }
    return (
        <View>
            <View style={styles.overviewContainer}>
                <Image style={styles.infoImage} source={require("../../../assets/info.png")} />
                <Text style={{ color: colors.lightGrey }}>Lorem ipsum dolor sit amet</Text>
            </View>
            <Text style={styles.commitText}>I Commit to...</Text>
            <InputField text={text} onChangeText={(text) => setText(text)} />
            <View style={styles.datePickerContainer}>
                <Text style={{ color: "#b9b9b9", fontSize: 17 }}>By</Text>
                <DatePicker
                    style={{ width: 300 }}
                    date={date}
                    showIcon={false}
                    mode="date"
                    placeholder="select date"
                    format="DD/MM-YYYY"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateInput: {
                            marginLeft: 36,
                            borderWidth: 0,
                            borderBottomWidth: 1,
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => { setDate(date) }}
                />
            </View>
            <View style={{ width: "100%", alignItems: "flex-end", marginTop: 20 }}>
                {renderNext()}
            </View>
        </View>
    )
}