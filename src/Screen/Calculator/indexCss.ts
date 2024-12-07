import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
