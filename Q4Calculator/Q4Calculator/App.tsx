import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from './style'

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');
  // Function to handle number inputs
  const handleNumberInput = (num) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };
  // Function to handle operator inputs
  const handleOperatorInput = (operator) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };
  // Function to handle equal button press
  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }
    setOperator(null);
    setFirstValue('');
  };
  // Function to handle clear button press
  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  }
  return (
    <View style={style.container}>
      <Text style={style.result}>{displayValue}</Text>
      <View style={{ flexDirection: 'row', paddingBottom: 10, paddingTop: 10 }}>
        <TouchableOpacity onPress={() => handleNumberInput('7')} style={style.btn}><Text style={style.num}>7</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberInput('8')} style={style.btn}><Text style={style.num}>8</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberInput('9')} style={style.btn}><Text style={style.num}>9</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperatorInput('/')} style={style.btnCal}><Text style={style.cal}>/</Text></TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
        <TouchableOpacity onPress={() => handleNumberInput('4')} style={style.btn}><Text style={style.num}>4</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberInput('5')} style={style.btn}><Text style={style.num}>5</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberInput('6')} style={style.btn} ><Text style={style.num}>6</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperatorInput('*')} style={style.btnCal}><Text style={style.cal}>*</Text></TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
        <TouchableOpacity onPress={() => handleNumberInput('1')} style={style.btn}><Text style={style.num}>1</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberInput('2')} style={style.btn}><Text style={style.num}>2</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberInput('3')} style={style.btn}><Text style={style.num}>3</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperatorInput('-')} style={style.btnCal}><Text style={style.cal}>-</Text></TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', paddingBottom: 10}}>
        <TouchableOpacity onPress={() => handleNumberInput('0')} style={style.btnZero}><Text style={style.num}>0</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperatorInput('+')} style={style.btnCal}><Text style={style.cal}>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={handleEqual} style={style.btnEqual}><Text style = {style.equal}>=</Text></TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleClear} style={style.btnClear}><Text style={style.cal}>C</Text></TouchableOpacity>
    </View>
  )
}


export default App;
