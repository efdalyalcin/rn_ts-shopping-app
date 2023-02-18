import { Dimensions, StyleSheet } from 'react-native';
import { colorStyles } from 'src/styles/colors';

const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    height: height - 64,
    width: '100%',
    backgroundColor: colorStyles.background,
  },
  closeButton: {
    display: 'flex',
    alignItems: 'flex-end',
    marginRight: 10,
    padding: 4,
  },
  inputs: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBlock: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    marginLeft: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colorStyles.primary,
    borderRadius: 16,
    flex: 1,
  },
  label: {
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
});
