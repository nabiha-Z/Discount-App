import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.ViewContainer}>
      <Text  style={styles.text}>Original Price</Text>
      <TextInput 
      style={styles.inputField}
      placeholder='Enter Price Here'
      />
      </View>
      <View style={styles.ViewContainer}>
      <Text style={styles.text}>Dicount (%)</Text>
      <TextInput 
      style={styles.inputField}
      placeholder='Enter Price Here'
      />
      </View>
      <Text style={styles.finalPriceText}>Dicounted Price</Text>
      <View style={styles.dicount}>
      <Text style={{ fontSize:20, color:'grey' }}>Rs.</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewContainer :{
    flexDirection: "row",
    justifyContent:'space-between',
    width:'80%',
    alignItems:'center',
    margin:10
  },
  inputField: {
    borderBottomWidth:3,
    width:'50%',
  },
  text: {
    fontSize:20,
  },
  finalPriceText :{
    margin:20,
    fontSize:25
  },
  dicount :{
    borderWidth:3,
    borderRadius:20,
    width:'30%',
    alignItems:'center',
    borderColor:'purple',

  }
  
});
