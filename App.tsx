// App.js
import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';

// Pages
import Initial from './src/Pages/Initial';
import SignIn from './src/Pages/SignIn';
import PacientList from './src/Pages/PacientList';
import Chart from './src/Pages/Chart';
import Checking from './src/Pages/Checking';

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Set status bar style globally */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="#81C784" // pastel green
      />

      <Stack.Navigator
        initialRouteName="Initial"
        screenOptions={{
          headerShown: false,
          animation: Platform.select({
            ios: 'fade',
            android: 'fade',
          }),
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="PacientList" component={PacientList} />
        <Stack.Screen name="Chart" component={Chart} />
        <Stack.Screen name="Checking" component={Checking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Notes on best practices:
// 1. enableScreens() improves native performance by using native containers for screens.
// 2. Using createNativeStackNavigator leverages platform-native transitions.
// 3. Global StatusBar set ensures consistent look across screens.
// 4. animation and gestureEnabled options allow smooth push/pop animations.
// 5. initialRouteName centralizes starting screen.
// 6. All headers are hidden; individual screens can show custom headers if needed.
