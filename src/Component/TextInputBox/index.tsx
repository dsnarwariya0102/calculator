import {StyleSheet, TextInput} from 'react-native';
import React, {memo} from 'react';

interface TextInputBoxProps {
  onChangeText?: () => {};
  placeholder?: String;
  value?: String;
  keyboardType?: string;
  testID?: string;
}

const TextInputBox: React.FC<TextInputBoxProps> = props => {
  const {
    onChangeText = () => {},
    value,
    keyboardType = 'numeric',
    placeholder,
    testID,
  } = props;

  return (
    <TextInput
      testID={testID}
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
};

export default memo(TextInputBox);

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
  },
});
