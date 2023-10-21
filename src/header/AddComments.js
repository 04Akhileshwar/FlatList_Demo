import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Styles from '../styles/Styles';

const AddComments = () => {
  return (
    <View style={Styles.comments}>
      <TextInput placeholder="Add a Comment..." />
    </View>
  );
};

export default AddComments;
