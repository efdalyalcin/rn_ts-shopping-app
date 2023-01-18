import { Dimensions, StyleSheet } from 'react-native';

const height = Dimensions.get('screen').height - 145;

export const styles = StyleSheet.create({
  listEmpty: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
});
