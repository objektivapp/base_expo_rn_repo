import React from "react";
import { TextInput } from 'react-native-paper';

export const InputField = (props) => {
    return (
        <TextInput
            mode="flat"
            label=""
            theme={{
                colors: {
                    background: "transparent"
                }
            }}
            value={props.text}
            onChangeText={text => props.onChangeText(text)}
        />
    )
}