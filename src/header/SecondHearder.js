import {Text, View} from 'react-native';
import React from 'react';
import {FirstData} from '../mockdata/MockData';
import {FlatList} from 'react-native-gesture-handler';
import Styles from '../styles/Styles';
import ThreeVector from '../assets/vectors';
const SecondHearder = () => {
  return (
    <FlatList
      data={FirstData}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <View style={Styles.secondHeader}>
          {item.text === 'Saved' ? <ThreeVector /> : null}
          <Text style={{marginLeft: 15}}>{item.text}</Text>
        </View>
      )}
    />
  );
};

export default SecondHearder;
