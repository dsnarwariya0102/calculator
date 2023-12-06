import React, {memo, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button, TextInputBox} from '../../Component';
import {styles} from './indexCss';

function Calculator(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [text, setText] = useState<string>('');
  const [outPut, setOutPut] = useState<number | undefined>(0);

  const handleSubmit = () => {
    let numbers = text.match(/-?\d+/g)?.map(Number); // Extracts all numbers

    if (!numbers) {
      setOutPut(0); // No numbers in the input, set output to 0
      return;
    }

    // Check for negative numbers
    let negativeNumbers = numbers.filter(n => n < 0);
    if (negativeNumbers.length > 0) {
      Alert.alert(
        `negative numbers not allowed: ${negativeNumbers.join(', ')}`,
      );
    }

    // Calculate the sum if there are no negative numbers
    let sum = numbers.reduce((a, b) => a + b, 0);
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
          {outPut !== undefined && outPut !== null && outPut > 0 && (
            <Text style={styles.sectionDescription} testID="output">
              {outPut}
            </Text>
          )}
        </View>

        <View style={styles.textInputContainer}>
          <TextInputBox
            testID="input-field"
            onChangeText={(txt: string) => setText(txt)}
            value={text}
            placeholder="Enter Number"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.textInputContainer} accessible={true}>
          <Button
            testID="submit-button"
            onPress={handleSubmit}
            Title={'Submit'}
          />
        </View>
      </View>
    </View>
  );
}

export default memo(Calculator);
