import * as Linking from 'expo-linking';
import flatten from 'lodash/flatten';
import uniq from 'lodash/uniq';
import React, { memo } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { BackButton, CategoryLink, Text, View } from '../components';
import { Styles } from '../constants';
import { useCache, useLocation, useTheme } from '../context';
import { Phone } from '../svgs';
import { tCacheUnion } from '../types';

/**
 * @description This component renders the available categories for the selected location. It gets the cities from the Airtable 'metaCategories' table.
 */
export const CategoryScreen = memo((props: any) => {
  const { mode } = useTheme();
  const { cache } = useCache();
  const { location }: { location: tCacheUnion } = useLocation();
  const { categories = [] } = cache;

  // we don't always have hotlines for every category for every city
  // this filters out any categories for which there are 0 hotlines for the given city
  let getUsedCategories: string[] = [];
  try {
    getUsedCategories = uniq(
      // @ts-ignore
      flatten(cache[location].map(r => r.fields.categories).filter(r => !!r)),
    );
  } catch (err) { }

  const catsToRender = categories.filter(cat => getUsedCategories.includes(cat));

  return (
    <View
      lightColor={Styles.white}
      darkColor={Styles.blue}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          lightColor={Styles.white}
          darkColor={Styles.orange}
          style={styles.danger}>
          <Text
            bold
            lightColor={Styles.orange}
            darkColor={Styles.white}
            style={styles.dangerTxt}>
            Life-threatening emergency?
          </Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('tel://911');
            }}>
            <View
              style={styles.dangerBtn}
              lightColor={Styles.orange}
              darkColor={Styles.white}>
              <View
                lightColor={Styles.orange}
                darkColor={Styles.white}
                style={styles.phoneWrap}>
                <Phone
                  color={mode === 'light' ? Styles.white : Styles.orange}
                />
              </View>
              <Text
                bold
                lightColor={Styles.white}
                darkColor={Styles.orange}
                style={styles.dangerBtnTxt}>
                Call 911
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <BackButton />
        <View style={styles.innerView}>
          <Text
            bold
            lightColor={Styles.black}
            darkColor={Styles.white}
            style={styles.title}>
            {location}
          </Text>
        </View>
        <View style={styles.innerView}>
          <Text
            bold
            lightColor={Styles.black}
            darkColor={Styles.white}
            style={styles.title}>
            What do you need help with?
          </Text>
          <View
            style={Styles.separator}
            lightColor={Styles.gray}
            darkColor={Styles.white}
          />
          {catsToRender.map((cat, i) => (
            <CategoryLink
              key={cat}
              includeIcon
              to="numbers"
              isLast={i === catsToRender.length - 1}
              navigation={props.navigation}
              category={cat}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  dangerTxt: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  danger: {
    display: 'flex',
    padding: 20,
    marginBottom: 50,
    width: '100%',
  },
  dangerBtnTxt: {
    alignSelf: 'stretch',
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
  },
  dangerBtn: {
    alignItems: 'center',
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    width: '100%',
  },
  phoneWrap: {
    position: 'absolute',
    left: 15,
  },
  community: {
    padding: 20,
    paddingTop: 30,
  },
  communityTxt: {
    fontSize: 20,
  },
  container: {
    flex: 1,
  },
  innerView: {
    paddingHorizontal: 20,
    // paddingTop: 40,
    paddingBottom: 20,
  },
  marginBottom15: {
    marginBottom: 15,
  },
  marginBottom30: {
    marginBottom: 30,
  },
  marginVertical30: {
    marginVertical: 30,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    marginBottom: 32,
  },
  blue: {
    color: Styles.blue,
  },
  marginBottom40: {
    marginBottom: 40,
  },
  trusted: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 20,
  },
  marginRight10: {
    marginRight: 10,
  },
});
