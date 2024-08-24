import React from 'react';
import Svg, {Path} from 'react-native-svg';

const EmptyCircle = () => {
  return (
    <Svg
      width="4"
      height="4"
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2Z"
        stroke="#FFCC25"
      />
    </Svg>
  );
};

export default EmptyCircle;
