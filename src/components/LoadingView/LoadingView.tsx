import { Text, StyleSheet, Modal, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AnimatedLoader from 'react-native-animated-loader';

type Props = {
  isVisible: boolean;
  loadingText: string;
};

export default function LoadingView({ isVisible, loadingText }: Props) {
  return (
    <AnimatedLoader
      visible={isVisible}
      overlayColor="rgba(255,255,255,0.75)"
      animationStyle={styles.lottie}
      speed={1}
    >
      <Text>{loadingText}</Text>
    </AnimatedLoader>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
