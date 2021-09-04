import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  row: {
    marginVertical: 5,
  },
  label: {
    // fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 2,
  },
  errors: {
    color: 'red',
  },
});

export default styles;
