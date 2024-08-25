import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../styles/colors';
import CalendarIcon from '../assets/icons/CalendarIcon';
import FilesIcon from '../assets/icons/FilesIcon';
import PenIcon from '../assets/icons/PenIcon';
import TrashIcon from '../assets/icons/TrashIcon';

const SpendingsCard = ({item}) => {
  return (
    <View key={item.id} style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.headerNumbers}>
          <Text style={styles.offer}>{item.offer}%</Text>
          <Text style={styles.amount}>{item.amount} ر.س</Text>
        </View>
      </View>
      <View style={styles.contentPadding}>
        <View style={styles.contentContainer}>
          <View style={styles.row}>
            <Text style={styles.rowContent}>
              <CalendarIcon height={13} width={13} color={colors.textLight} />{' '}
              تاريخ الدفع
            </Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowContent}>
              <FilesIcon height={13} width={13} color={colors.textLight} />{' '}
              الملفات المرفقة
            </Text>
            <View style={styles.imageContainer}>
              {item?.attachments?.map(attachment => (
                <View style={styles.image}>
                  <Image source={attachment} height={15} width={15} />
                </View>
              ))}
              <Text style={styles.extraImages}>+2</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity>
          <Text style={styles.footerText}>
            <PenIcon height={13} width={13} color={colors.textLight} /> تعديل
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>
            <TrashIcon height={13} width={13} color={colors.textLight} /> مسح
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F5FA',
    padding: 19,
    borderWidth: 2,
    borderColor: colors.gray,
    borderRadius: 10,
    marginVertical: 7,
  },
  name: {fontSize: 16, color: colors.darkBlue},
  offer: {color: colors.error},
  headerNumbers: {flexDirection: 'row-reverse', gap: 5},
  amount: {fontSize: 16, color: colors.darkBlue},
  contentPadding: {padding: 14},
  contentContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: colors.gray,
    backgroundColor: colors.gray,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  rowContent: {
    color: colors.textLight,
    fontSize: 13,
    paddingVertical: 4,
  },
  date: {color: colors.textLight, fontSize: 14},
  imageContainer: {flexDirection: 'row'},
  image: {paddingHorizontal: 2},
  extraImages: {color: colors.primary, fontSize: 16},
  footerText: {color: colors.textLight, fontSize: 13},
});

export default SpendingsCard;
