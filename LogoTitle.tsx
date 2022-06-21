import { Image, Text, StyleSheet } from 'react-native';

export function LogoTitle() {
  return (
    <>
      <Image
        style={styles.logoImg}
        source={require('./assets/logoHeader.png')} />
      <Text style={styles.logoTitle}>TabNews</Text>
    </>
  );
}

export const styles = StyleSheet.create({
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
