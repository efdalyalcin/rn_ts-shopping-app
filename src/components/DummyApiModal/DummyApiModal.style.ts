import { Dimensions, StyleSheet } from 'react-native';
import { colorStyles } from 'src/styles/colors';

const height = Dimensions.get('screen').height;

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
});
