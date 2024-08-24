import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import colors from '../styles/colors';

export default function CustomButton({content = '', onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.content}>{content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: colors.darkBlue,
    borderRadius: 26,
  },
  content: {
    color: colors.darkBlue,
    fontSize: 15,
  },
});
