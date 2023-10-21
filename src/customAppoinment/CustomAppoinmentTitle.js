import {View, Text} from 'react-native';
import React from 'react';
import Styles from '../styles/Styles';

const CustomAppoinmentTitle = () => {
  return (
    <View style={Styles.appointmentTitle}>
      <Text>How many days does your</Text>
      <Text>periods usually last?</Text>
    </View>
  )
}

export default CustomAppoinmentTitle