import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Styles from '../styles/Styles';

const ConnectionPeople = () => {
  return (
    <View style={Styles.connectionPeople}>
      <View style={Styles.people}>
        <View style={Styles.people}>
          <View style={Styles.people} />
        </View>
      </View>
      <View style={Styles.showPeople}>
        <Text>Answered by 5.1K people</Text>
      </View>
    </View>
  );
};

export default ConnectionPeople;
