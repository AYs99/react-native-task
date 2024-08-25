import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import colors from '../styles/colors';

import ChartLineUpIcon from '../assets/icons/ChartLineUpIcon';
import WalletIcon from '../assets/icons/WalletIcon';
import ChartAreaIcon from '../assets/icons/ChartAreaIcon';
import LeftArrow from '../assets/icons/LeftArrow';

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
    flex: 1 / 3,
    paddingBottom: 14,
  },
  title: {
    fontSize: 13,
  },
  number: {
    color: colors.darkBlue,
    fontSize: 16,
  },
});

const ProjectsCard = ({item, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.info}>
            المقاول: <Text style={styles.contractor}>{item.contractor}</Text>
          </Text>
          <Text style={styles.info}>
            التاريخ: <Text style={styles.date}>{item.date}</Text>
          </Text>
        </View>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.statisticsContainer}>
        <Statistics
          icon={
            <ChartLineUpIcon width={25} height={25} color={colors.textLight} />
          }
          title={'إجمالي المبلغ'}
          number={item.total}
        />
        <Statistics
          icon={<WalletIcon width={25} height={25} color={colors.textLight} />}
          title={'المصروف'}
          number={item.spent}
        />
        <Statistics
          icon={
            <ChartAreaIcon width={25} height={25} color={colors.textLight} />
          }
          title={'المبلغ المتبقي'}
          number={item.remaining}
        />
      </View>
      <View style={styles.accentContainer}>
        <Image
          source={require('../assets/images/projectFooter.png')}
          style={styles.accent}
        />
      </View>
      <TouchableOpacity
        style={styles.footerContainer}
        onPress={() => navigation.navigate('تفاصيل المشروع')}>
        <Text style={styles.footerText}>عرض التفاصيل</Text>
        <LeftArrow />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 371,
    marginHorizontal: 5,
    borderRadius: 16,
    borderColor: colors.gray,
    borderWidth: 1,
    backgroundColor: colors.gray,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 34,
  },
  info: {
    color: colors.textLight,
  },
  contractor: {
    color: colors.primary,
    fontSize: 15,
  },
  date: {
    color: colors.textDark,
  },
  name: {
    fontSize: 22,
    color: colors.darkBlue,
  },
  statisticsContainer: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 16,
  },
  accentContainer: {
    height: 35,
    width: '100%',
    opacity: 0.7,
    zIndex: 1,
  },
  accent: {
    height: 100,
    width: '100%',
  },
  footerContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
    zIndex: 2,
    backgroundColor: colors.gray,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  footerText: {
    fontSize: 16,
    color: colors.darkBlue,
  },
});

export default ProjectsCard;
