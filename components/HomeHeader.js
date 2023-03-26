import React from 'react';
import { View, Text, Image, TextInput } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
    return (
        <>
            <View
                style={{
                    backgroundColor: COLORS.primary,
                    padding: SIZES.font,
                }}
            >
                <View
                    style={{
                        flexDirection:  'row',
                        justifyContent: 'space-between',
                        alignItems:  'center',
                    }}
                >
                    <Image
                        source={assets.logo}
                        resizeMethod='contain'
                        style={{
                            width: 90,
                            height: 25,
                        }}
                    />

                    <View
                        style={{
                            width: 45,
                            height: 45,
                        }}
                    >
                        <Image
                            source={assets.person01}
                            resizeMode='contain'
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                        <Image
                            source={assets.badge}
                            resizeMode='contain'
                            style={{
                                position: 'absolute',
                                width: 15,
                                height: 15,
                                bottom: 0,
                                right: 0,
                            }}
                        />
                    </View>
                </View>

                <View
                    style={{
                        marginVertical: SIZES.font,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: FONTS.regular,
                            fontSize: SIZES.small,
                            color: COLORS.white,
                        }}
                    >
                        Hello, Daisy 👋
                    </Text>
                    <Text
                        style={{
                            fontFamily: FONTS.bold,
                            fontSize: SIZES.large,
                            color: COLORS.white,
                            marginTop: SIZES.base / 2,
                        }}
                    >
                        Let’s find masterpiece Art
                    </Text>
                </View>

                <View
                    style={{
                        marginTop: SIZES.font,
                    }}
                >
                    <View
                        style={{
                            width: '100%',
                            borderRadius: 20,
                            backgroundColor: COLORS.greenMode,
                            flexDirection: 'row',
                            alignItems:  'center',
                            paddingHorizontal: SIZES.font,
                            paddingVertical: SIZES.small - 2,
                        }}
                    >
                        <Image
                            source={assets.search}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                marginRight: SIZES.base,
                            }}
                        />
                        <TextInput
                            placeholder='Search Catalog NFTs'
                            style={{
                                flex: 1,
                                borderStyle: "none",
                                outlineStyle: "none",
                                color: COLORS.secondary,
                            }}
                            onChangeText={onSearch}
                        />
                    </View>
                </View>
            </View>
        </>
    )
};

export default HomeHeader;
