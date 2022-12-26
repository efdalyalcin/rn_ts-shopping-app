import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  favorite: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    marginTop: 8,
  },
  cardPic: {
    marginTop: 8,
    height: 200,
    width: Dimensions.get('screen').width - 20,
    resizeMode: 'contain',
  },
});
