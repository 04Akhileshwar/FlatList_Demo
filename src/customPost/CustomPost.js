import {View} from 'react-native';
import React from 'react';
import CustomHeader from './CustomHeader';
import Styles from '../styles/Styles';
import CustomImage from './CustomImage';
import CustomLike from './CurtomLike';
import CustomText from '../customPost/CustomText';
import CustomPeople from '../customPost/CustomPeople';
import Comments from '../header/comments';
import AddComments from '../header/AddComments';
import AnonymousPost from './AnonymousPost';
const CustomPost = () => {
  return (
    <View style={Styles.customHeader}>
      <CustomHeader />
      <CustomImage />
      <CustomLike />
      <CustomText />
      <CustomPeople />
      <Comments />
      <AnonymousPost />
      <AddComments />
    </View>
  );
};

export default CustomPost;
