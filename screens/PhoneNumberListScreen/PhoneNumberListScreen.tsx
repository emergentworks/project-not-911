import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { IconGroup, Text, View, BackButton } from '../../components';
import { Styles } from '../../constants';
import { useLocation, useCache } from '../../context';
import { getRecordsFromLocation } from '../../queries';

/**
 * @description This component renders phone numbers from cache or airtable whichever is available
 */
export const PhoneNumberListScreen = (props: any) => {
  const { cache, setCache } = useCache();
  const [records, setRecords] = useState([]);
  const { location }: { location: string } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      if (cache[location]) {
        setRecords(cache[location]);
        setCache();
      } else {
        setRecords(await getRecordsFromLocation(location));
      }
    }
    fetchData();
  });

  if (records.length === 0) return null;

  // @TODO remove filter once we refactor categories to come from Airtable.
  // We are only showing phone numbers that match the current category selected by the user.
  const { route } = props;
  const sortedAndFilteredRecords = records
    .filter((record: any) => {
      const { fields } = record;

      // In case of data error normalizes categories
      const normalizedCats = fields.categories.map((categories: string) => {
        return categories.toLowerCase().replaceAll(' ', '');
      });

      if (!normalizedCats.includes(route.params.section)) return false;
      return true;
    })
    .sort((record: any) => {
      // and lets always have 'crisis' hotlines at the top
      // crisis meaning, mental health breakdowns, etc, but not an 'emergency'
      // wherein someone is currently in physical danger
      if (record.fields.isCrisis) return -1;
      return 1;
    });

  // @TODO move into utils folder.
  // renders text differently when a resource has option to call only or call & text
  const formatTextInfo = (textInfo: { content?: string; record: string }) => {
    if (textInfo === undefined) {
      return '';
    }

    let displayInfo: string = 'or text';

    if (textInfo.content) {
      displayInfo += ` ${textInfo.content} to`;
    }

    displayInfo += ` ${textInfo.record}`;

    return displayInfo;
  };

  return (
    <View
      darkColor={Styles.black}
      lightColor={Styles.white}
      style={styles.container}>
      <BackButton darkColor='black' />
      <ScrollView showsVerticalScrollIndicator={false}>
        {sortedAndFilteredRecords.map((record: any) => (
          <View
            key={record.id}
            darkColor="#000"
            lightColor={Styles.white}
            style={styles.item}>
            <Text
              bold
              darkColor={Styles.white}
              lightColor={Styles.blue}
              style={[
                styles.hours,
                styles.centerTxt,
                record.fields.isCrisis && { color: Styles.orange },
              ]}>
              {record.fields.hours}
            </Text>
            <Text
              bold
              darkColor={Styles.white}
              style={[styles.centerTxt, styles.title]}>
              {record.fields.name}
            </Text>
            <Text
              darkColor={Styles.white}
              style={[styles.centerTxt, styles.tel]}>
              {record.fields.phoneNumber} {formatTextInfo(record.text)}
            </Text>
            <IconGroup
              crisis={record.fields.isCrisis}
              tel={record.fields.phoneNumber}
              text={record.fields.text}
              website={record.fields.website} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 30,
    paddingLeft: 30,
  },
  rotate: {
    marginRight: 10,
    transform: [{ rotate: '180deg' }],
  },
  container: {
    flex: 1,
    paddingTop: 60,
  },
  centerTxt: {
    textAlign: 'center',
  },
  item: {
    marginBottom: 30,
    paddingBottom: 30,
  },
  paddingTop30: {
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  phone: {
    height: 30,
    width: 30,
  },
  marginBottom30: {
    marginBottom: 30,
  },
  hours: {
    fontSize: 18,
    paddingBottom: 5,
  },
  tel: {
    marginBottom: 15,
  },
});
