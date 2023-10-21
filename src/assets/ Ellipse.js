import React from 'react';
import {View, Text} from 'react-native';
import {Svg, Path, Circle} from 'react-native-svg';
const EllipseIcon = () => {
  return (
    <Svg width="3" height="20" viewBox="0 0 3 11" fill="none">
      <Circle cx="1.5" cy="1.5" r="1.5" fill="#fff" />
      <Circle cx="1.5" cy="5.5" r="1.5" fill="#fff" />
      <Circle cx="1.5" cy="9.5" r="1.5" fill="#fff" />
    </Svg>
  );
};
export default EllipseIcon;
