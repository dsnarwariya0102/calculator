/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  let outPut = 'Output';

  const [text, setText] = useState('');

  const handleSubmit = () => {
    const numbers = text.match(/\d+/g); // Extracts all numbers
    console.log(numbers); // Output: ['123', '4']
  };

  return (
    <View style={[styles.conatiner, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View style={[styles.sectionContainer]}>
        <Text style={styles.sectionTitle}>Calculator</Text>

        <View style={styles.outputContainer}>
          <Text style={styles.sectionDescription}>{outPut}</Text>
        </View>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={txt => setText(txt)}
            value={text}
            placeholder="Enter Number"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.textInputContainer}>
          <TouchableOpacity
            style={styles.buttonConatiner}
            onPress={handleSubmit}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 30,
  },
  outputContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
  },
  textInputContainer: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
  buttonConatiner: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 0.8,
    borderRadius: 10,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
