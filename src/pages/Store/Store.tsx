import { View, Text, FlatList, Dimensions, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import useFavoriteProducts from 'src/store/favoriteProducts';
import { Button, Card, Paragraph } from 'react-native-paper';
import { getProducts } from 'src/services/getProducts';
import { styles } from './Store.style';
import { HeaderStyle } from 'src/styles/header';
// @ts-ignore
import favoritesIcon from 'assets/icons/favorite_border.png';
import ShopCard from 'src/components/ShopCard/ShopCard';
import { IProduct } from 'src/shared/productInterface';

const height = Dimensions.get('screen').height - HeaderStyle.headerSize - 80;

export default function Store() {
  const [shopList, setShopList] = useState<any>();
  const { favorites, addToFavorites, removeFromFavorites } =
    useFavoriteProducts();

  useEffect(() => {
    getProducts().then((res) => setShopList(res));
  }, []);

  console.log(shopList);

  const renderItem = ({ item, index }) => {
    const isInFavorites = favorites.find((favItem) => favItem.id === item.id);
    return (
      <>
        <ShopCard
          title={item.title}
          description={item.description}
          pic={item.image}
        />
        {
          //   <Card mode="elevated" style={styles.flatListItems}>
          //   <Card.Title title={item.title} />
          //   <Card.Content>
          //     <Paragraph>{item.description}</Paragraph>
          //   </Card.Content>
          //   <Card.Cover source={{ uri: item.image }} resizeMode="contain" />
          //   <Card.Actions>
          //     <Button
          //       onPress={
          //         isInFavorites
          //           ? () => removeFromFavorites(item.id)
          //           : () => addToFavorites(item)
          //       }
          //     >
          //       Add to Favorites
          //       {/* <Image source={favoritesIcon}></Image> */}
          //     </Button>
          //     <Button>Add to Cart</Button>
          //   </Card.Actions>
          // </Card>
        }
      </>
    );
  };

  return (
    <View style={(styles.container, { height: height })}>
      <FlatList
        renderItem={renderItem}
        data={shopList}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
