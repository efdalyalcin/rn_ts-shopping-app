import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('screen').width - 20;
const imageWidth = Dimensions.get('screen').width / 4;

export const styles = StyleSheet.create({
  itemContainer: {
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    width: screenWidth,
  },
  imageContainer: {
    width: '30%',
  },
  image: {
    height: 64,
    width: imageWidth,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  standardWidth: {
    width: '10%',
  },
  priceWidth: {
    width: '30%',
    textAlign: 'center',
  },
});
