import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import RBSheet from 'react-native-raw-bottom-sheet';

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
  const refRBSheet = useRef();
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
      <TouchableOpacity
        style={styles.downloadButton}
        onPress={() => refRBSheet.current.open()}>
        <Text style={styles.downloadText}>تحميل ملف المصروفات</Text>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(10, 39, 84, 0.5)',
            height: 50,
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 300,
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <View style={styles.BSContainer}>
          <TouchableOpacity
            style={styles.BSClose}
            onPress={() => refRBSheet.current.close()}>
            <Text style={styles.BSCloseText}>X</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.BSHeader}>من فضلك قم باختيار نوع الملف</Text>
            <Text style={styles.BSSubHeader}>
              يمكنك اختيار تنزيل الملف بالصيغ التالية
            </Text>
            <View style={styles.BSContentContainer}>
              <TouchableOpacity>
                <View style={styles.BSButtonPDF}>
                  <Image source={require('../../assets/images/PDF.png')} />
                  <Text style={styles.BSDownloadText}>ملف PDF</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.BSButtonExcel}>
                  <Image source={require('../../assets/images/XLSX.png')} />
                  <Text style={styles.BSDownloadText}>ملف Excel</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </RBSheet>
      <View style={styles.spendingContainer}>
        <Text style={styles.spendingTitle}>المصروفات</Text>
        <FlatList
          data={spendings}
          renderItem={({item}) => <SpendingsCard item={item} />}
          style={styles.spendings}
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
  spendings: {height: 500},
  BSContainer: {padding: 16},
  BSClose: {
    backgroundColor: colors.gray,
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BSCloseText: {fontWeight: '900'},
  BSHeader: {fontSize: 20, color: colors.darkBlue},
  BSSubHeader: {marginTop: 13, fontSize: 14, color: colors.textLight},
  BSContentContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    paddingTop: 43,
  },
  BSButtonPDF: {
    borderRadius: 11,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: '#FFF8E2',
    paddingVertical: 23,
    paddingHorizontal: 39,
  },
  BSDownloadText: {
    fontSize: 8,
    color: colors.darkBlue,
    paddingTop: 13,
  },
  BSButtonExcel: {
    borderRadius: 11,
    backgroundColor: colors.gray,
    paddingVertical: 23,
    paddingHorizontal: 39,
  },
});

export default ProjectDetails;
