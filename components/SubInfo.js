import React from 'react';
import { View, Text, Image } from 'react-native';
import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

export const NFTTitle = () => {
    return (
        <View>
            <Text>NFTTitle</Text>
        </View>
    );
};

export const EthPrice = () => {
    return (
        <View>
            <Text>ETH Price:</Text>
        </View>
    );
};

const ImageCmp = ({ imgUrl, index }) => {
    return (
        <Image
            source={imgUrl}
            resizeMode="contain"
            style={{
                width: 48,
                height: 48,
                marginLeft: index === 0 ? 0 : -SIZES.font,
            }}
        />
    );
};

export const People = () => {
    return (
        <View style={{ flexDirection: "row" }}>
            {[assets.person02, assets.person03, assets.person04].map(
                (imgUrl, index) => (
                    <ImageCmp
                        imgUrl={imgUrl}
                        index={index}
                        key={`People-${index}`}
                    />
                )
            )}
        </View>
    );
};

export const EndDate = () => {
    return (
        <View>
            <Text>EndDate</Text>
        </View>
    );
};

export const SubInfo = () => {
    return (
        <View
            style={{
                width: '100%',
                paddingHorizontal: SIZES.font,
                marginTop: -SIZES.extraLarge,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
        >
            <People />
            <EndDate />

        </View>
    );
};
