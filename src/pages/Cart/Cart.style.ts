import { Dimensions, StyleSheet } from 'react-native';
import { colorStyles } from 'src/styles/colors';

const height = Dimensions.get('screen').height - 145;

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 30,
    display: 'flex',
    alignItems: 'flex-end',
  },
  checkoutContainer: {
    paddingVertical: 8,
    paddingHorizontal: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttons: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: colorStyles.picker,
    borderRadius: 8,
  },
  checkout: {
    backgroundColor: colorStyles.favorites,
  },
  loginText: {
    color: colorStyles.text,
  },
  checkoutText: {
    color: colorStyles.secondary,
  },
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
