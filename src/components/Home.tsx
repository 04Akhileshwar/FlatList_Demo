import {ScrollView, View} from 'react-native';
import React from 'react';
import TopHeader from '../header/TopHeader';
import SecondHearder from '../header/SecondHearder';
import HeaderTitle from '../header/headerTitle';
import CardHeader from '../header/cardHeader';
import CustomPost from '../customPost/CustomPost';
import CustomAppoinment from '../customAppoinment/CustomAppoinment';
const Home = () => {
  return (
    <ScrollView>
      <View style={{flex: 1, marginTop: 40}}>
        <TopHeader />
        <SecondHearder />
        <HeaderTitle />
        <CardHeader />
        <CustomPost />
        <CustomAppoinment />
      </View>
    </ScrollView>
  );
};

export default Home;
