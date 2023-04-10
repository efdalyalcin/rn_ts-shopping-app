import { StyleSheet } from 'react-native';
import { colorStyles } from 'src/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logout: {
    backgroundColor: colorStyles.favorites,
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 12,

    width: '50%',
    paddingVertical: 12,
    backgroundColor: colorStyles.picker,
    borderRadius: 24,
  },
  buttonText: {
    color: colorStyles.text,
  },
});
