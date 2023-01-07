import { StyleSheet } from 'react-native';
import { colorStyles } from 'src/styles/colors';

export const styles = StyleSheet.create({
  addButton: {
    display: 'flex',
    alignItems: 'center',

    height: 36,
    marginTop: 8,
    padding: 8,

    borderRadius: 50,
    backgroundColor: colorStyles.picker,
  },
  addButtonText: { fontSize: 16, fontWeight: 'bold', color: colorStyles.text },
  inputButton: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 8,
  },
});
