import React from 'react';
import { AsyncStorage } from 'react-native';
import _ from 'lodash';

import { airtable } from '../utils';
import { getRecordsFromLocation } from '../queries';

/**
 * @description this component sets and saves cache using React Context.
 * Async Storage only stores string data. In order to store object data
 * we serialize it first using JSON. stringify() when saving the data
 * and JSON. parse() when loading the data.
 * @returns JSON
 */

// initiate context
export const ManageCacheContext: React.Context<any> = React.createContext({
  cache: {},
  setCache: () => { },
});

// define useCache hook for functional components
export const useCache = () => React.useContext(ManageCacheContext);

// Initializes cache
export class CacheManager extends React.Component<any, any> {
  state = {
    cache: {},
  };

  // Retrieve cache from storage and save it.
  async componentDidMount() {
    try {
      const savedCache = await AsyncStorage.getItem('cache');
      if (typeof savedCache === 'string') {
        const parsedCache = JSON.parse(savedCache);

        // We do this to prevent infinite loops.
        if (!_.isEqual(this.state.cache, parsedCache)) {
          this.setState({
            cache: parsedCache,
          });
        }
      } else {
        this.setCache();
      }
    } catch (err) { }
  }

  /**
   * @description Fetch all city names from Airtable and use to query for all
   * phone numbers. If any change save to cache, else do nothing.
   */
  setCache = async () => {
    const meta = await airtable({
      method: 'get',
      url: 'meta',
    });
    const cities = meta.records.map((rec: any) => {
      return rec.fields.name;
    });
    const phoneNumbersByCity = {};
    await Promise.all(cities.map(async (city: string) => {
      const numbers = await getRecordsFromLocation(city);
      // @ts-ignore
      phoneNumbersByCity[city] = numbers
      return null;
    }));

    if (_.isEqual(this.state.cache, phoneNumbersByCity)) {
      return null;
    }

    const newCache = JSON.stringify(phoneNumbersByCity);
    try {
      await AsyncStorage.setItem('cache', newCache);
      this.setState({
        cache: phoneNumbersByCity,
      });
    } catch (err) { }
  }

  render() {
    return (
      <ManageCacheContext.Provider
        value={{
          cache: this.state.cache,
          setCache: this.setCache,
        }}>
        {this.props.children}
      </ManageCacheContext.Provider>
    );
  }
}