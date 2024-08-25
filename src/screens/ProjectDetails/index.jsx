import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import colors from '../../styles/colors';

import SpendingsCard from '../../components/SpendingsCard';

import WhatsappIcon from '../../assets/icons/WhatsappIcon';
import PhoneIcon from '../../assets/icons/PhoneIcon';
import ChartLineUpIcon from '../../assets/icons/ChartLineUpIcon';
import ChartAreaIcon from '../../assets/icons/ChartAreaIcon';
import WalletIcon from '../../assets/icons/WalletIcon';

const image1 = require('../../assets/images/Screenshot_7.png');
const image2 = require('../../assets/images/Screenshot_8.png');

const spendings = [
  {
    id: 1,
    name: 'اسم المصروف هنا',
    offer: 10,
    amount: 20000,
    date: '22 Aug 2024',
    attachments: [image1, image2],
  },
  {
    id: 2,
    name: 'اسم المصروف هنا',
    offer: 10,
    amount: 20000,
    date: '22 Aug 2024',
    attachments: [image1, image2],
  },
  {
    id: 3,
    name: 'اسم المصروف هنا',
    offer: 10,
    amount: 20000,
    date: '22 Aug 2024',
    attachments: [image1, image2],
  },
];

const Statistics = ({icon, title, number}) => {
  return (
    <View style={statisticsStyles.container}>
      {icon}
      <Text style={statisticsStyles.title}>{title}</Text>
      <Text style={statisticsStyles.number}>{number} ر.س</Text>
    </View>
  );
};

const statisticsStyles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    paddingBottom: 14,
  },
  title: {
    fontSize: 13,
    color: colors.textLight,
    paddingTop: 10,
  },
  number: {
    color: 'white',
    fontSize: 16,
  },
});

const ProjectDetails = () => {
  return (
    <SafeAreaView style={styles.center}>
      <View style={styles.header}>
        <View style={styles.contractorContainer}>
          <View>
            <Text style={styles.title}>
              المقاول: <Text style={styles.contractorName}>عبدالله علي يس</Text>
            </Text>
          </View>
          <View style={styles.contactContainer}>
            <View style={styles.whatsapp}>
              <WhatsappIcon />
            </View>
            <View style={styles.phone}>
              <PhoneIcon />
            </View>
          </View>
        </View>
        <View style={styles.statisticsContainer}>
          <Statistics
            icon={
              <ChartLineUpIcon
                width={25}
                height={25}
                color={colors.textLight}
              />
            }
            title={'إجمالي المبلغ'}
            number={70000}
          />
          <Statistics
            icon={
              <WalletIcon width={25} height={25} color={colors.textLight} />
            }
            title={'المصروف'}
            number={80000}
          />
          <Statistics
            icon={
              <ChartAreaIcon width={25} height={25} color={colors.textLight} />
            }
            title={'المبلغ المتبقي'}
            number={90000}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadText}>تحميل ملف المصروفات</Text>
      </TouchableOpacity>
      <View style={styles.spendingContainer}>
        <Text style={styles.spendingTitle}>المصروفات</Text>
        <FlatList
          data={spendings}
          renderItem={({item}) => <SpendingsCard item={item} />}
          style={{height: 500}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {alignItems: 'center'},
  header: {padding: 13, backgroundColor: colors.darkBlue, width: '100%'},
  contractorContainer: {
    paddingVertical: 13,
    paddingHorizontal: 19,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {fontSize: 13, color: colors.textLight},
  contractorName: {fontSize: 17, color: colors.gray},
  contactContainer: {flexDirection: 'row-reverse', gap: 5},
  whatsapp: {
    height: 38,
    width: 38,
    backgroundColor: '#C5FFDB',
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phone: {
    height: 38,
    width: 38,
    backgroundColor: 'white',
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statisticsContainer: {
    flexDirection: 'row-reverse',
    paddingVertical: 16,
    justifyContent: 'space-around',
  },
  downloadButton: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    backgroundColor: colors.primary,
    borderRadius: 18,
    width: 206,
    alignItems: 'center',
    position: 'absolute',
    top: 195,
  },
  downloadText: {color: colors.darkBlue, fontSize: 15},
  spendingContainer: {paddingTop: 25, paddingHorizontal: 18, width: '100%'},
  spendingTitle: {fontSize: 20, color: colors.darkBlue},
});

export default ProjectDetails;
