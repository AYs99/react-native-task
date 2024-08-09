/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSubtract = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{counter}</Text>
      <Button title="+ counter" onPress={() => handleAdd()} color="#459045" />
      <Button
        title="- counter"
        onPress={() => handleSubtract()}
        color="#904545"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  counter: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 20,
  },
  counterButton: {
    width: '50%',
    margin: 10,
  },
});

export default App;
