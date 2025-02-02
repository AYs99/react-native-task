import React from 'react';
import Svg, {Path} from 'react-native-svg';

const RoundedRectangle = () => {
  return (
    <Svg
      width="4"
      height="15"
      viewBox="0 0 4 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M0 2C0 0.89543 0.895431 0 2 0C3.10457 0 4 0.895431 4 2V13C4 14.1046 3.10457 15 2 15C0.895431 15 0 14.1046 0 13V2Z"
        fill="#FFCC25"
      />
    </Svg>
  );
};

export default RoundedRectangle;
