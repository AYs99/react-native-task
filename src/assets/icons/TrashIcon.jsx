import React from 'react';
import Svg, {Path} from 'react-native-svg';

const TrashIcon = ({height = 16, width = 16, color = '#000000'}) => {
  return (
    <Svg
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512">
      <Path
        fill={color}
        d="M424 80h-74.38l-34-56.75C306.9 8.875 291.3 0 274.4 0H173.6c-16.88 0-32.5 8.875-41.25 23.25L98.38 80H23.1C10.75 80 0 90.75 0 103.1S10.75 128 23.1 128H32l21.21 339c1.5 25.25 22.52 45 47.9 45h245.8c25.38 0 46.4-19.75 47.9-45L416 128h8C437.3 128 448 117.3 448 104S437.3 80 424 80zM173.6 48h100.8l19.25 32H154.4L173.6 48zM346.9 464H101.1L80.13 128h287.8L346.9 464z"
      />
    </Svg>
  );
};

export default TrashIcon;
