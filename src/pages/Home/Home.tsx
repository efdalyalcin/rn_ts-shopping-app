import { View, Text, Dimensions, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './Home.style';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import BottomNav from '../../components/BottomNav/BottomNav';
import { HeaderStyle } from '../../styles/header';
import { getProducts } from 'src/services/getProducts';
import useFavoriteProducts from 'src/store/favoriteProducts';

const height = Dimensions.get('screen').height - HeaderStyle.headerSize - 80;

export default function Home({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [shopList, setShopList] = useState<any>();
  const bearsStore = useFavoriteProducts();

  const renderItem = ({ item, index }) => {
    return (
      <Card mode="elevated" style={styles.flatListItems}>
        <Card.Title title={item.title} />
        <Card.Content>
          <Paragraph>{item.description}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: item.image }} resizeMode="contain" />
        <Card.Actions>
          <Button onPress={() => bearsStore.increasePopulation()}>
            Add to Cart
          </Button>
        </Card.Actions>
      </Card>
    );
  };

  useEffect(() => {
    getProducts().then((res) => setShopList(res));
  }, []);

  return (
    <>
      <View style={(styles.container, { height: height })}>
        <Text>{bearsStore.bears}</Text>
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
