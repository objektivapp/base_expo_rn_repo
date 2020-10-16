
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export const NextButton = (props) => {

    return (
        <TouchableOpacity onPress={() => props.onNextClick()} style={{ flexDirection: "row" }}>
            <Text style={{ color: "#5742fe", fontWeight: "bold", fontSize: 17 }}>{"NEXT >>"}</Text>
        </TouchableOpacity>
    )
}
