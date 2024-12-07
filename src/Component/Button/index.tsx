import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';

interface ButtonProps {
  onPress?: () => void;
  testID?: String;
  Title?: String;
}

const Button: React.FC<ButtonProps> = props => {
  const {onPress = () => {}, testID, Title} = props;

  return (
    <TouchableOpacity
      style={styles.buttonConatiner}
      onPress={onPress}
      testID={testID}>
      <Text>{Title}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  buttonConatiner: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 0.8,
    borderRadius: 10,
  },
});
