import { View, Text, Dimensions, ScrollView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './Home.style';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import BottomNav from '../../components/BottomNav/BottomNav';
import { HeaderStyle } from '../../styles/Header';
import { getProducts, IProduct } from 'src/services/getProducts';

const height = Dimensions.get('screen').height - HeaderStyle.headerSize - 80;

const renderItem = ({ item }) => {
  return (
    <Card>
      <Card.Title title={item.title} />
      <Card.Content>
        <Paragraph>{item.description}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: item.image }} resizeMode="contain" />
      <Card.Actions>
        <Button>Add to Cart</Button>
      </Card.Actions>
    </Card>
  );
};

export default function Home({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [shopList, setShopList] = useState<any>();

  useEffect(() => {
    getProducts().then((res) => setShopList(res));
  }, []);

  console.log(shopList);
  return (
    <>
      <View style={(styles.container, { height: height })}>
        <FlatList
          renderItem={renderItem}
          data={shopList}
          keyExtractor={(item) => item.id}
        />
      </View>
      <BottomNav />
    </>
  );
}
