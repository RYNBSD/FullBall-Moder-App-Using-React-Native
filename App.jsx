import React from 'react';
import { ImageBackground, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { fonts } from './constants';
import { Loading, Error } from './components/app';
import { Home, Profile } from './pages';


const Stack = createNativeStackNavigator();

const App = () => {

  const [loaded, error] = useFonts({
    ...fonts
  });

  if (!loaded) {
    return <Loading />;
  }

  if (error) {
    return <Error />
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;