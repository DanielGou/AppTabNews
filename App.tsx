import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image, Text, View } from 'react-native';

import Home from './src/home/Home'


function LogoTitle(){
  return(
    <>
      <Image
        style={styles.logoImg}
        source={require('./assets/logoHeader.png')}
        />
      <Text style={styles.logoTitle}>TabNews</Text>
    </>
  )
}

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

const styles = StyleSheet.create({
  logoImg:{
    width: 35, 
    height: 35,
    zIndex: 10,
  },
  logoTitle:{
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold'
  }
})

