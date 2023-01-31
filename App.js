import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    background: 'transparent',
  }
};

const App = () => {
  return (
    <NavigationContainer>
      
    </NavigationContainer>
  );
}

export default App;
