import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import colors from '../styles/colors';

import CustomButton from './CustomButton';

const HeroSectionHeader = ({title = ''}) => {
  return (
    <View style={styles.sectionHeader}>
      <CustomButton content="عرض الكل" />
      <Text style={styles.sectionHeaderTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingBottom: 14,
  },
  sectionHeaderTitle: {
    color: colors.darkBlue,
    fontSize: 22,
  },
});

export default HeroSectionHeader;
