import React from 'react';
import Lottie from 'lottie-react-native';
import { styles } from './LoadingLottie.style';
import { View } from 'react-native';

export default function LoadingLottie() {
  return (
    <View style={styles.container}>
      <Lottie
        source={require('assets/lotties/hour-glass-orange.json')}
        style={styles.lottie}
        autoPlay
        loop
      />
    </View>
  );
}
