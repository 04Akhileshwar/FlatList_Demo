import { View, Text } from 'react-native';
import React from 'react';
import VectorIcon from '../assets/vector'
import Styles from '../styles/Styles';
import EllipseIcon from '../assets/ Ellipse';
const CustomHeader = () => {
  return (

    <View style={Styles.customPost}>
      <View style={Styles.Search}>
        <VectorIcon />
      </View>
      <View style={Styles.title}>
        <Text>Dr.Priya</Text>
      </View>
      <View>
        <Text style={Styles.follow}>follow</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row-reverse', paddingLeft: 10 }} >
        <EllipseIcon />
      </View>
    </View>


  );
};

export default CustomHeader;