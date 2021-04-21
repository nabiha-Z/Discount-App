import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
const [getOriginal, setOriginal] = useState(0);
const [getDicount, setDisocunt] = useState(0);
const [getSave, setSave] = useState(0);
const[getFinalPrice, setFinalPrice] = useState(0);
function calculateDicount (){

 var discount = getOriginal * (getDicount/100);
 setSave(discount);
 var finalP=getOriginal - discount;
 setFinalPrice(finalP);

}

useEffect(() =>{

  calculateDicount();
})

  return (
    <View style={styles.container}>
      <View style={styles.ViewContainer}>
      <Text  style={styles.text}>Original Price</Text>
      <TextInput 
      keyboardType = 'number-pad'
      style={styles.inputField}
      placeholder='Enter Price Here'
      onChangeText={text => setOriginal(text)}
      />
      
      </View>
      <View style={styles.ViewContainer}>
      <Text style={styles.text}>Disount (%)</Text>
      <TextInput 
      style={styles.inputField}
      placeholder='Enter Price Here'
      onChangeText={text => setDisocunt(text)}
      />
      </View>
      <Text style={styles.finalPriceText}>You Save: Rs. {getSave}</Text>
      <Text style={styles.finalPriceText}>Final Price</Text>
      <View style={styles.dicount}>
      <Text style={{ fontSize:20, color:'grey' }}>Rs. {getFinalPrice}</Text>
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
