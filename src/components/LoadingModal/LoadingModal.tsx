import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import AnimatedLoader from 'react-native-animated-loader';

export default function LoadingModal() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setVisible(!visible);
    }, 2000);
  }, []);

  return (
    <AnimatedLoader
      visible={visible}
      overlayColor="rgba(255,255,255,0.75)"
      animationStyle={styles.lottie}
      speed={1}
    >
      <Text>Doing something...</Text>
    </AnimatedLoader>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
