import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Styles from '../styles/Styles';

const HeaderTitle = () => {
  return (
    <View style={Styles.headerTitle}>
      <Text>Popular Gynecologists in your locality</Text>
    </View>
  );
};

export default HeaderTitle;
