import { View, Text, Modal, Animated, Pressable } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import { styles } from './DummyApiModal.style';
//@ts-ignore
import CloseIcon from 'assets/icons/close-circle-outline.svg';
import { colorStyles } from 'src/styles/colors';

type Props = {
  isModalVisible: boolean;
  setIsModalVisible: (setter: boolean) => void;
  modalLabel: string;
};

export default function DummyApiModal({
  isModalVisible,
  setIsModalVisible,
  modalLabel,
}: Props) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  const fadeOut = () => {
    fadeAnim.setValue(0);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(!isModalVisible);
      }}
      onShow={fadeIn}
    >
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            setIsModalVisible(false);
            fadeOut();
          }}
          style={styles.closeButton}
        >
          <CloseIcon width={24} height={24} fill={colorStyles.main} />
        </Pressable>
        <Text>{modalLabel}</Text>
      </View>
    </Modal>
  );
}
