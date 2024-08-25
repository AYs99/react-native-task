import React from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import HeroButton from '../../components/HeroButton';

import HeroSectionHeader from '../../components/HeroSectionHeader';
import ProjectsCard from '../../components/ProjectsCard';
import LatestTransactionsCard from '../../components/LatestTransactionsCard';

import CalculatorIcon from '../../assets/icons/CalculatorIcon';
import BellIcon from '../../assets/icons/BellIcon';
import PeopleIcon from '../../assets/icons/PeopleIcon';
import PersonIcon from '../../assets/icons/PersonIcon';

const HeroBackground = require('../../assets/images/HeroBackground.png');

const user = {
  name: 'عبدالله علي يس',
};

const projects = [
  {
    name: 'دمياط الجديدة',
    contractor: 'عبدالله علي يس',
    date: '21 أغسطس 2024',
    total: 70000,
    spent: 200000,
    remaining: 100000,
  },
  {
    name: 'دمياط الجديدة',
    contractor: 'عبدالله علي يس',
    date: '21 أغسطس 2024',
    total: 70000,
    spent: 200000,
    remaining: 100000,
  },
  {
    name: 'دمياط الجديدة',
    contractor: 'عبدالله علي يس',
    date: '21 أغسطس 2024',
    total: 70000,
    spent: 200000,
    remaining: 100000,
  },
];

const latestTransactions = [
  {
    name: 'السلام عليكم',
    status: 'paid',
    date: '21 Aug 2024',
    amount: 1000,
    service: 'الخدمات',
    office: 'طلعت مصطفى',
    department: 'قسم فرعي 3',
  },
  {
    name: 'السلام عليكم',
    status: 'unpaid',
    date: '21 Aug 2024',
    amount: 1000,
    service: 'الخدمات',
    office: 'طلعت مصطفى',
    department: 'قسم فرعي 3',
  },
  {
    name: 'السلام عليكم',
    status: 'paid',
    date: '21 Aug 2024',
    amount: 1000,
    service: 'الخدمات',
    office: 'طلعت مصطفى',
    department: 'قسم فرعي 3',
  },
];

export default function Hero({navigation}) {
  return (
    <SafeAreaView>
      <ImageBackground style={styles.HeroSection} source={HeroBackground}>
        <View style={styles.TopBar}>
          <View style={styles.HeroButtonsContainer}>
            <HeroButton
              icon={<PeopleIcon />}
              onPress={() => console.log('generic')}
            />
            <HeroButton
              icon={<BellIcon />}
              onPress={() => console.log('generic')}
            />
          </View>
          <CalculatorIcon />
        </View>
        <View style={styles.userContainer}>
          <PersonIcon />
          <View style={styles.userContainerText}>
            <Text style={styles.welcome}>مرحبا</Text>
            <Text style={styles.userName}>{user.name}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.projectsContainer}>
        <HeroSectionHeader title="المشاريع" />
        <FlatList
          data={projects}
          renderItem={({item}) => (
            <ProjectsCard item={item} navigation={navigation} />
          )}
          horizontal={true}
        />
      </View>
      <View style={styles.projectsContainer}>
        <HeroSectionHeader title="اخر المعاملات" />
        <FlatList
          style={styles.latestTransactions}
          data={latestTransactions}
          renderItem={({item}) => <LatestTransactionsCard item={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  HeroSection: {
    // height: 250,
  },
  TopBar: {
    paddingTop: 18,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeroButtonsContainer: {
    flexDirection: 'row',
    gap: 9,
  },
  userContainer: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 56,
  },
  userContainerText: {
    alignItems: 'center',
    paddingTop: 16,
  },
  welcome: {
    fontSize: 16,
  },
  userName: {
    fontSize: 21,
  },
  projectsContainer: {
    paddingTop: 24,
  },
  latestTransactions: {
    height: 100,
  },
});
