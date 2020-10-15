import React from "react";
import { View, Text, ImageBackground, Dimensions, Image } from "react-native";


const { width } = Dimensions.get('window')
export const Header = () => {
    return (
        <View>
            <ImageBackground source={require("../../../assets/topBackground.png")} style={{ height: 130, width, resizeMode: 'stretch', justifyContent: "center", alignItems: "center" }} >
                <Image source={require("../../../assets/logo.png")} style={{ height: 50, width: 150 }} height={500} width={200} resizeMode="stretch" />
            </ImageBackground>
        </View>
    )
}