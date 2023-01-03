import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    padding: 8,
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
  },
  desc: {
    marginTop: 8,
  },
  cardPic: {
    marginTop: 8,
    height: 200,
    width: Dimensions.get('screen').width - 40,
    resizeMode: 'contain',
  },
});
