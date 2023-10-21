import {View, Text} from 'react-native';
import React from 'react'
import Heart from '../assets/heart';
import CommentsIcon from '../assets/ comments';
import ShareIcon from '../assets/ share'
import Styles from '../styles/Styles';
const CustomLike = () => {
  return (
    <View style={Styles.customLike}>
      <View style={Styles.search}>
        <Heart />
      </View>
      <View style={Styles.title}>
        <CommentsIcon />
      </View>
      <View style={Styles.share}>
        <ShareIcon />
      </View>
    </View>
  )
}

export default CustomLike;