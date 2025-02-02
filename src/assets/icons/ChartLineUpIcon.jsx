import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ChartLineUpIcon = ({height = 16, width = 16, color = '#000000'}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512 512">
      <Path
        d="M488 432H48V56C48 42.74 37.25 32 24 32S0 42.74 0 56V448c0 17.6 14.4 32 32 32h456c13.25 0 24-10.75 24-24C512 442.7 501.3 432 488 432zM144.1 304.1L208 241.9l79.03 79.03C291.7 325.7 297.8 328 304 328s12.28-2.344 16.97-7.031L432 209.9V264C432 277.3 442.8 288 456 288S480 277.3 480 264v-112C480 138.8 469.3 128 456 128h-112C330.8 128 320 138.8 320 152s10.75 24 24 24h54.06L304 270.1L224.1 191c-9.375-9.375-24.56-9.375-33.94 0l-80 80c-9.375 9.375-9.375 24.56 0 33.94S135.6 314.3 144.1 304.1z"
        fill={color}
      />
    </Svg>
  );
};

export default ChartLineUpIcon;
