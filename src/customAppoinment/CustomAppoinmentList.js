import {View, Text, FlatList} from 'react-native';
import React from 'react'
import { AppointmentList } from '../mockdata/MockData';
import Styles from '../styles/Styles';
const CustomAppoinmentList = () => {
  return (
    <View>
      <FlatList
        data={AppointmentList}
        renderItem={({item}) => 
          <View style ={Styles.appointmentList}>
            <Text>{item.text}</Text>
          </View>
        }
      />
    </View>
  )
}

export default CustomAppoinmentList;
