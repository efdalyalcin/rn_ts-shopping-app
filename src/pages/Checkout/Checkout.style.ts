import { Dimensions, StyleSheet } from 'react-native';
import { colorStyles } from 'src/styles/colors';

const priceHeight = Dimensions.get('screen').height / 4;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorStyles.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  payment: {
    height: priceHeight,
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
