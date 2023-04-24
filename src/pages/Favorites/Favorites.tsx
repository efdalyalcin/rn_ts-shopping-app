import { View, Text, ScrollView, FlatList } from 'react-native';
import React from 'react';
import useFavoriteProducts from 'src/store/favoriteProductsStore';
import ShopCard from 'src/components/ShopCard/ShopCard';
import { styles } from './Favorites.style';

const ListEmpty = () => {
  return (
    <View style={styles.listEmpty} pointerEvents="none">
      <Text style={styles.text}>There is no item in your Favorites</Text>
    </View>
  );
};

export default function Favorites() {
  const { favorites } = useFavoriteProducts();

  const renderItem = ({ item, index }) => {
    return (
      <ShopCard
        title={item.title}
        description={item.description}
        pic={item.image}
        item={item}
      />
    );
  };

  return (
    <FlatList
      data={favorites}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={ListEmpty}
    />
  );
}
