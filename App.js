import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Touchable, TouchableHighlight } from 'react-native';

export default function App() {
  /*function of button*/ 
  /*TouchableHighlight for any of the element can be like button*/
  const handleBtn = () => alert('Hello World')
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello World!</Text>
      <Text style={styles.head2}>Welcome to my app!</Text>
      <Image
          source={require('./imgs/snoopyDog.png')} style={{width: 200, height: 200}}/>
          <Button onPress={()=> alert('Hello World')} title="Press Me"/>
          <TouchableHighlight onPress={handleBtn}>
            <View>
            <Image source={require('./imgs/snoopyDog.png')} style={{width: 200, height: 200}}/>
            </View>
          </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:32,
    color:'red'
  },
  head2:{
    marginTop:10,
    color:'orange',
    fontSize: 24
  }
 
});
