import { View, Text, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './Home.style';
import { Button } from 'react-native-paper';
import BottomNav from '../../components/BottomNav/BottomNav';
import { HeaderStyle } from '../../styles/Header';
import { getProducts } from 'src/services/getProducts';

const height = Dimensions.get('screen').height - HeaderStyle.headerSize;

export default function Home({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [shopList, setShopList] = useState<any>();

  useEffect(() => {
    const data = getProducts();
    setShopList(data.data);
  }, []);
  console.log(shopList);
  return (
    <View style={(styles.container, { height: height })}>
      {/* <Text>Home</Text>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Go to the Chart
      </Button> */}
      <BottomNav />
    </View>
  );
}
