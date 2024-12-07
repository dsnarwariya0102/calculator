import React, {memo, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from '../../Component';
import {styles} from './indexCss';

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
