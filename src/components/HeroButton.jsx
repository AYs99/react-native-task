import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import colors from '../styles/colors';

const HeroButton = ({icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Button}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    height: 50,
    width: 50,
    backgroundColor: colors.gray,
    padding: 10,
    borderRadius: 10,
  },
});

export default HeroButton;
