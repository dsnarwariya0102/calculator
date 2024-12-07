import React, {memo, useState} from 'react';
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

function Calculator(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [text, setText] = useState<string>('');
  const [outPut, setOutPut] = useState<number | undefined>(0);

  const handleSubmit = () => {
    let numbers = text.match(/\d+/g); // Extracts all numbers
    let sum: number | undefined = numbers
      ?.map(Number)
      ?.reduce((a, b) => a + b, 0);
    setOutPut(sum);
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
          <Text style={styles.sectionDescription} testID="output">
            {outPut}
          </Text>
        </View>

        <View style={styles.textInputContainer}>
          <TextInput
            testID="input-field"
            style={styles.input}
            onChangeText={txt => setText(txt)}
            value={text}
            placeholder="Enter Number"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.textInputContainer} accessible={true}>
          <TouchableOpacity
            style={styles.buttonConatiner}
            onPress={handleSubmit}
            testID="submit-button">
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

export default memo(Calculator);
