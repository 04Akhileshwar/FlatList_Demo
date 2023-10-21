import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Styles from '../styles/Styles';
import VectorIcon from '../assets/vector';

const CustomPeople = () => {
  return (
    <View style={Styles.connectionPeople}>

      <View style={Styles.people}>
        <View style={Styles.people}>
          <View style={Styles.people}>
            <View style={{ paddingTop: 5, paddingRight: 5 }}>
              <VectorIcon />
            </View>

          </View>
        </View>
      </View>

      <View style={Styles.showPeople}>
        <Text>Liked by 5.1K people</Text>
      </View>
    </View>
  );
};

export default CustomPeople;
