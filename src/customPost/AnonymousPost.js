import {View, Text} from 'react-native';
import React from 'react';
import Styles from '../styles/Styles';

const AnonymousPost = () => {
  return (
    <View style={Styles.appointmentTitle}>
      <Text>
        Anonymous: Blood clots are perfectly normal. It’s just older blood that
        has clotted together before it was passed.
      </Text>
    </View>
  );
};

export default AnonymousPost;
