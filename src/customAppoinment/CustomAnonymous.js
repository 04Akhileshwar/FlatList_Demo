import {View, Text} from 'react-native';
import React from 'react';
import Styles from '../styles/Styles';

const CustomAnonymous = () => {
  return (
    <View style={Styles.appointmentTitle}>
      <Text>Anonymous:Different each cycle</Text>
    </View>
  );
};

export default CustomAnonymous;
