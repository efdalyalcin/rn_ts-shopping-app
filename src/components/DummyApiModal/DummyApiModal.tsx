import { View, Text, Modal, Animated, Pressable, Alert } from 'react-native';
import React, { useCallback, useRef } from 'react';
import { AirbnbRating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';

import { styles } from './DummyApiModal.style';
//@ts-ignore
import CloseIcon from 'assets/icons/close-circle-outline.svg';
import { colorStyles } from 'src/styles/colors';
import useAuth from 'src/store/authStore';
import useBottomNavIndex from 'src/store/bottomNavIndexStore';

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
  const { logout } = useAuth();
  const navigation = useNavigation();
  const { setIndex } = useBottomNavIndex();

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

  const handleRating = (value: number) => {
    let text: string;
    if (value === 1) {
      text = 'We are sorry that you rated only 1 star';
    }

    if (value > 1) {
      text = `Thanks for the ${value} stars!`;
    }
    Alert.alert(text, 'The app will restart now!', [
      {
        text: 'OK',
        onPress: () => {
          logout();
          fadeOut();
          //@ts-ignore
          navigation.navigate('Home');
          setIndex(0);
        },
      },
    ]);
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
        <View style={styles.info}>
          <Animated.View style={{ opacity: fadeAnim }}>
            <Text style={styles.text}>{modalLabel}</Text>
            <Text style={styles.text}>Thanks for trying the app.</Text>
            <Text style={styles.text}>Please rate us ☺️</Text>
          </Animated.View>
          <View style={styles.rating}>
            <AirbnbRating
              count={5}
              reviews={['Terrible', 'Bad', 'OK', 'Good', 'Amazing']}
              defaultRating={0}
              size={30}
              onFinishRating={handleRating}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
