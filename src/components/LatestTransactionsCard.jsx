import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import colors from '../styles/colors';

import RoundedRectangle from '../assets/icons/RoundedRectangle';
import EmptyCircle from '../assets/icons/EmptyCircle';

const LatestTransactionsCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.statusContainer}>
          <Text style={styles.status(item)}>
            {item.status === 'paid' ? 'تم الدفع' : 'لم يتم الدفع'}
          </Text>
          <Text style={styles.statusDate}>{item.date}</Text>
        </View>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.footer}>
        <View>
          <Text>{item.amount} ر.س</Text>
        </View>
        <View>
          <Text>
            <RoundedRectangle /> {item.service} <EmptyCircle /> {item.office}{' '}
            <EmptyCircle /> {item.department}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    marginRight: 15,
    marginLeft: 20,
    paddingTop: 13,
    paddingRight: 18,
    paddingBottom: 16,
    paddingLeft: 14,
    backgroundColor: colors.gray,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  statusDate: {
    fontSize: 12,
    color: colors.textLight,
  },
  status: item => ({
    backgroundColor:
      item.status === 'paid'
        ? colors.successBackground
        : colors.errorBackground,
    paddingHorizontal: 13,
    paddingVertical: 2,
    borderRadius: 100,
    color: item.status === 'paid' ? colors.success : colors.error,
  }),
  name: {
    color: colors.darkBlue,
    fontSize: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 19,
  },
});

export default LatestTransactionsCard;
