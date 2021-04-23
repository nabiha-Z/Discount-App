import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
const [getOriginal, setOriginal] = useState(0);
const [getDicount, setDisocunt] = useState(0);
const [getSave, setSave] = useState(0);
const[getFinalPrice, setFinalPrice] = useState(0);
const[getErrorMsg, setErrorMsg] = useState(Array(2).fill(""));
function calculateDicount (){
if(getOriginal ==0 ){
  setFinalPrice("---");
  setSave("---");
}else{
 var discount = getOriginal * (getDicount/100);
 discount=discount.toFixed(2);
 setSave(discount);
 
 var finalP=getOriginal - discount;
 finalP=finalP.toFixed(2);
 setFinalPrice(finalP);
}
}

function PositivePrice(text){
  if(text<0){
    setErrorMsg((getErrorMsg) => {
                getErrorMsg[0] = "Price should be a positive number."
                return getErrorMsg;
            });
    setOriginal(0);
    setFinalPrice("---");
  }else{
    setOriginal(text);
     setErrorMsg((getErrorMsg) => {
                getErrorMsg[0] = ""
                return getErrorMsg;
            });
      
    
  }

}

function Validation(t){
  if(t>100){

    setErrorMsg((getErrorMsg) => {
                getErrorMsg[1] = "Discount Value should not be greater than 100"
                return getErrorMsg;
            });
    setDisocunt(0);
  }else{
    setDisocunt(t);
    setErrorMsg((getErrorMsg) => {
                getErrorMsg[1] = ""
                return getErrorMsg;
            });
  }


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
      onChangeText={text => PositivePrice(text)}
      />
      
      </View>
      <Text style={{fontSize:15, color:'red', margin:5}}>{getErrorMsg[0]}</Text>
      <View style={styles.ViewContainer}>
      <Text style={styles.text}>Disount (%)</Text>
      <TextInput 
      style={styles.inputField}
      keyboardType = 'number-pad'
      placeholder='Enter Price Here'
      maxLength={3}
      onChangeText={text => Validation(text)}
      />
      </View>
      <Text style={{fontSize:15, color:'red', margin:5}}>{getErrorMsg[1]}</Text>
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
