import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {CardData} from '../mockdata/MockData';
import Styles from '../styles/Styles';
import ImageView from '../assets/ImageView';

const CardHeader = () => {
  return (
    <View>
      <FlatList
        data={CardData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={Styles.cardHeader}>
            <ImageView />
            <Text style={{fontSize: 14, textAlign: 'left'}}>{item.title}</Text>
            <Text style={{fontSize: 10, textAlign: 'left'}}>
              {item.subtitle}
            </Text>
            <Text style={{fontSize: 10, textAlign: 'left'}}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CardHeader;
