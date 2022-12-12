import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './Home.style';
import { Button } from 'react-native-paper';
import BottomNav from '../../components/BottomNav/BottomNav';

export default function Home({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Go to the Chart
      </Button>
      <BottomNav />
    </View>
  );
}
