import {View, Text} from 'react-native';
import React from 'react'
import Styles
 from '../styles/Styles';
 import VectorIcon from '../assets/vector';
const CustomAppoinmentHeader = () => {
  return (
    <View style={Styles.customPost}>
      <View style={Styles.Search}>
        <VectorIcon />
      </View>
      <View style={Styles.title}>
        <Text>Dr.Priya</Text>
      </View>
    </View>
  );
};

export default CustomAppoinmentHeader;