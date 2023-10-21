import React from 'react';
import {View, Text} from 'react-native';
import {Svg, Path, Circle, Rect} from 'react-native-svg';

const ImageView = () => {
  return (
    <Svg width="127" height="87" viewBox="0 0 127 87" fill="none">
      <Rect width="127" height="64" rx="5" fill="#EDEDED" />
      <Rect x="37" y="37" width="50" height="50" rx="25" fill="#EDEDED" />
    </Svg>
  );
};
export default ImageView;
