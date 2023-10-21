import React from 'react';
import {TextInput, View} from 'react-native';
import VectorIcon from '../assets/vector';
import NotificationIcon from '../assets/notification';
import Styles from '../styles/Styles';
const TopHeader = () => {
  return (
    <View style={Styles.Container}>
      <View style={Styles.Search}>
        <VectorIcon />
      </View>
      <TextInput placeholder="  Search" style={Styles.textInput} />
      <NotificationIcon />
    </View>
  );
};

export default TopHeader;
