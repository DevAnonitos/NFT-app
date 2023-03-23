import React from 'react';
import { View, Text, Image, TextInput } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = () => {
    return (
        <View
            style={{
                backgroundColor: COLORS.primary,
                padding: SIZES.font
            }}
        >
            <Text style={{ color: "#fff" }}>
                HomeHeader
            </Text>
        </View>
    )
};

export default HomeHeader;
