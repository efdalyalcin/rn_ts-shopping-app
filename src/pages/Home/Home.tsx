import { View, Text, Dimensions, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './Home.style';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import BottomNav from '../../components/BottomNav/BottomNav';
import { HeaderStyle } from '../../styles/header';
import { getProducts } from 'src/services/getProducts';
import useFavoriteProducts from 'src/store/favoriteProductsStore';

const height = Dimensions.get('screen').height - HeaderStyle.headerSize - 80;

export default function Home() {
  //#region Stack navigation usage
  //   {
  //   navigation,
  //   route,
  // }: {
  //   navigation: any;
  //   route: any;
  // }
  //#endregion

  return (
    <>
      <BottomNav />
    </>
  );
}
