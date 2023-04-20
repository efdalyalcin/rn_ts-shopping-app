import { Dimensions, StyleSheet } from 'react-native';
import { colorStyles } from 'src/styles/colors';

const height = Dimensions.get('screen').height;
const infoHeight = height - 20 - 32;

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: height,
    width: '100%',
    backgroundColor: colorStyles.background,
  },
  closeButton: {
    display: 'flex',
    alignItems: 'flex-end',
    marginRight: 10,
    padding: 4,
  },
  info: {
    paddingHorizontal: 8,
    height: infoHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: colorStyles.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  rating: {
    height: 100,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});
