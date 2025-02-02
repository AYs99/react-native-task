import React from 'react';
import Svg, {Path} from 'react-native-svg';

const WalletIcon = ({height = 16, width = 16, color = '#000000'}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512 512">
      <Path
        d="M440 128h-320C106.8 128 96 138.8 96 152S106.8 176 120 176h320c13.23 0 24 10.77 24 24v208c0 13.23-10.77 24-24 24h-352c-22.06 0-40-17.94-40-40v-272c0-22.06 17.94-40 40-40h368C469.3 80 480 69.25 480 56S469.3 32 456 32H88C39.47 32 0 71.47 0 120v272C0 440.5 39.47 480 88 480h352c39.7 0 72-32.3 72-72v-208C512 160.3 479.7 128 440 128zM416 304c0-17.67-14.33-32-32-32s-32 14.33-32 32c0 17.67 14.33 32 32 32S416 321.7 416 304z"
        fill={color}
      />
    </Svg>
  );
};

export default WalletIcon;
