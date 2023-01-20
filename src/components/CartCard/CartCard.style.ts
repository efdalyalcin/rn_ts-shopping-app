import { Dimensions, StyleSheet } from 'react-native';
import { colorStyles } from 'src/styles/colors';

const imageWidth = Dimensions.get('screen').width / 4;
const cardWidth = Dimensions.get('screen').width - 20;

export const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    padding: 8,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 64,
    width: imageWidth,
    resizeMode: 'contain',
  },
  title: {
    width: imageWidth,
    overflow: 'hidden',
    maxHeight: 64,
    textAlign: 'center',
    color: colorStyles.text,
  },
});
