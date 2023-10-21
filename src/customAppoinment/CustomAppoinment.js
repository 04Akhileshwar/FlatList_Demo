import {View, Text} from 'react-native';
import React from 'react'
import CustomAppoinmentHeader from './CustomAppoinmentHeader';
import Styles from '../styles/Styles';
import CustomAppoinmentTitle from './CustomAppoinmentTitle';
import CustomAppoinmentList from './CustomAppoinmentList';
import ConnectionPeople from './ConnectionPeople';
import Comments from '../header/comments';
import AddComments from '../header/AddComments';
import CustomAnonymous from '../customAppoinment/CustomAnonymous';
const CustomAppoinment = () => {
  return (
    <View style={Styles.customHeader}>
      <CustomAppoinmentHeader />
      <CustomAppoinmentTitle />
      <CustomAppoinmentList />
      <ConnectionPeople />
      <Comments />
      <CustomAnonymous />
      <AddComments />
    </View>
  );
};

export default CustomAppoinment;
