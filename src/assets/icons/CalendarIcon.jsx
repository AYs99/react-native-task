import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CalendarIcon = ({height = 16, width = 16, color = '#000000'}) => {
  return (
    <Svg
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512">
      <Path
        fill={color}
        d="M112 0C120.8 0 128 7.164 128 16V64H320V16C320 7.164 327.2 0 336 0C344.8 0 352 7.164 352 16V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H96V16C96 7.164 103.2 0 112 0zM416 192H32V448C32 465.7 46.33 480 64 480H384C401.7 480 416 465.7 416 448V192zM384 96H64C46.33 96 32 110.3 32 128V160H416V128C416 110.3 401.7 96 384 96z"
      />
    </Svg>
  );
};

export default CalendarIcon;
