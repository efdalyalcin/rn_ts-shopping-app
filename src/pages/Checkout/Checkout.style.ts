import { Dimensions, StyleSheet } from 'react-native';
import { colorStyles } from 'src/styles/colors';

const imageWidth = Dimensions.get('screen').width / 4;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorStyles.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 64,
    width: imageWidth,
    resizeMode: 'contain',
  },
});
