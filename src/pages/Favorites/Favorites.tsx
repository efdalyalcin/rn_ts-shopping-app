import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import useFavoriteProducts from 'src/store/favoriteProducts';
import ShopCard from 'src/components/ShopCard/ShopCard';

export default function Favorites() {
  const { favorites } = useFavoriteProducts();

  return (
    <ScrollView>
      {favorites.length
        ? favorites.map((item) => (
            <ShopCard
              key={item.id}
              title={item.title}
              description={item.description}
              pic={item.image}
              item={item}
            />
          ))
        : null}
    </ScrollView>
  );
}
