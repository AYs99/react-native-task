import {TouchableOpacity} from 'react-native';
import React from 'react';

import Svg, {Path} from 'react-native-svg';

const RightArrow = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Svg
        width="10"
        height="16"
        viewBox="0 0 10 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M1.25391 1.5L8 8.24622L1.25391 14.9924"
          stroke="white"
          stroke-width="2"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default RightArrow;
