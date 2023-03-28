import { Dimensions, StyleSheet } from 'react-native';

const height = Dimensions.get('screen').height - 40;

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
    backgroundColor: 'rgba(243, 239, 236, 0.8)',
    // opacity: 0.7,
  },
  lottie: {
    width: 100,
    height: 100,
    opacity: 1,
    transform: [{ translateY: -25 }],
  },
  // title: { fontSize: 20, fontWeight: '600' },
});
