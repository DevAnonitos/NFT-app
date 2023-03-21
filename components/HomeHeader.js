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
            HomeHeader
        </View>
    )
};

export default HomeHeader;
