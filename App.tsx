import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';

import Home from './src/home/Home'
import { LogoTitle } from './LogoTitle';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerTitle: ()=>  <LogoTitle/>,
        headerStyle:{
          backgroundColor: '#24292f',
        },
      }}
      >
        <Stack.Screen 
          name="home" 
          component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

