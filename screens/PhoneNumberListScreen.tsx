import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { BackButton, IconGroup, Text, View } from '../components';
import { Styles } from '../constants';
import { useCache, useLocation, useTheme } from '../context';
import { getRecordsFromLocation } from '../queries';
import { tCacheUnion } from '../types';

/**
 * @description renders phone numbers from cache or airtable whichever is available
 */
export const PhoneNumberListScreen = (props: any) => {
  const { cache, setCache } = useCache();
  const [records, setRecords] = useState([]);
  const { mode }: { mode: 'light' | 'dark' } = useTheme();
  const [showDescIds, setShowDescIds] = useState([] as string[]);
  const { location }: { location: tCacheUnion } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const phoneNumbers: any = cache[location];
      if (typeof phoneNumbers !== 'undefined') {
        setRecords(phoneNumbers);
        setCache();
      } else {
        setRecords(await getRecordsFromLocation(location));
      }
    };
    fetchData();
  });

  if (records.length === 0) return null;

  // @TODO remove filter once we refactor categories to come from Airtable.
  // We are only showing phone numbers that match the current category selected by the user.
  const { route } = props;
  const sortedAndFilteredRecords = records
    .filter((record: any) => {
      const { fields = {} } = record;
      const { categories = [] as string[] } = fields;
      const re = /\s+/gi;

      // In case of data error normalizes categories
      const normalizedCats = categories
        .map((cat = '') => cat.toLowerCase().replace(re, ''));

      if (!normalizedCats.includes(route?.params?.section)) return false;
      return true;
    })
    .sort((record: any) => {
      // and lets always have 'crisis' hotlines at the top
      // crisis meaning, mental health breakdowns, etc, but not an 'emergency'
      // wherein someone is currently in physical danger
      if (record.fields.isCrisis) return -1;
      return 1;
    });

  return (
    <View
      darkColor={Styles.black}
      lightColor={Styles.white}
      style={styles.container}>
      <BackButton darkColor="black" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {sortedAndFilteredRecords.map((record: any) => {
          const {
            description,
            hours,
            isCrisis,
            name,
            phoneNumber,
            text = '',
            textContent = '',
            website,
          } = record.fields;

          return (
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
                  styles.pH10,
                  isCrisis && { color: Styles.orange },
                ]}>
                {hours}
              </Text>
              <Text
                bold
                darkColor={Styles.white}
                style={[styles.centerTxt, styles.title]}>
                {name}
              </Text>
              {!!description && (
                <>
                  {!showDescIds.includes(record.id) && (
                    <Text
                      darkColor={Styles.white}
                      style={[
                        mode === 'dark' ? styles.whiteBorder : styles.blueBorder,
                        styles.centerTxt,
                        styles.desc,
                        styles.mb10,
                        styles.pH10,
                      ]}
                      onPress={() => {
                        setShowDescIds([...showDescIds, record.id]);
                      }}>
                      Read description
                    </Text>
                  )}
                  {showDescIds.includes(record.id) && (
                    <Text
                      darkColor={Styles.white}
                      style={[styles.centerTxt, styles.mb10, styles.pH10]}>
                      {description}
                    </Text>
                  )}
                </>
              )}
              <Text
                darkColor={Styles.white}
                style={[styles.centerTxt, styles.tel]}>
                {Array.isArray(phoneNumber)
                  && phoneNumber.map((num, i) => (
                    i === phoneNumber.length - 1 ? `${num}, ` : num
                  ))}
                {!Array.isArray(phoneNumber) && phoneNumber}
              </Text>
              <IconGroup
                crisis={isCrisis}
                tel={phoneNumber}
                text={{
                  content: textContent,
                  number: text,
                }}
                website={website}
              />
            </View>
          );
        })}
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
  caret: {
    width: 10,
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
  blueBorder: {
    borderColor: '#3333ff',
  },
  whiteBorder: {
    borderColor: '#fff',
  },
  desc: {
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    fontSize: 14,
    paddingVertical: 4,
  },
  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  mr10: {
    marginRight: 10,
  },
  pH10: {
    paddingHorizontal: 10,
  },
  item: {
    alignItems: 'center',
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
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
