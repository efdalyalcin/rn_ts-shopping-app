import { Dimensions, StyleSheet } from 'react-native';
import { colorStyles } from 'src/styles/colors';

const priceHeight = Dimensions.get('screen').height / 5;
const priceWidth = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  payment: {
    height: priceHeight,
    width: priceWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: colorStyles.picker,
    borderRadius: 20,
  },
  checkoutText: {
    color: colorStyles.text,
  },
});
