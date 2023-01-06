import { Dimensions, StyleSheet } from 'react-native';
import { colorStyles } from 'src/styles/colors';

export const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
  },
  shadowProp: {
    // shadowColor: '#171717',
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
  },
  favorite: {
    alignItems: 'flex-end',
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colorStyles.text,
  },
  desc: {
    marginTop: 8,
    color: colorStyles.text,
  },
  cardPic: {
    marginTop: 8,
    height: 200,
    width: Dimensions.get('screen').width - 50,
    resizeMode: 'contain',
  },
  price: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 16,
    color: colorStyles.text,
  },
});
