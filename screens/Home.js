import React, { useState } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import { COLORS, NFTData } from "../constants";

import { FocusedStatusBar } from '../components';

const Home = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar backgroundColor={COLORS.primary}/>
        <View style={{flex: 1}}>

        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
