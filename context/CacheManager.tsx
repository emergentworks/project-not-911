import _ from 'lodash';
import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { getRecordsFromLocation } from '../queries';
import { airtable } from '../utils';

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

  static isMounted = false;

  // Retrieve cache from storage and save it.
  async componentDidMount() {
    CacheManager.isMounted = true;

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
    } catch (err) {
      console.error(err);
    }
  }

  componentWillUnmount() {
    CacheManager.isMounted = false;
  }

  /**
   * @description Fetch all city names from Airtable and use to query for all
   * phone numbers. If any change save to cache, else do nothing.
   */
  setCache = async () => {
    if (!CacheManager.isMounted) return null;

    const meta = await airtable({
      method: 'get',
      url: 'meta',
    });

    console.log('meta ? ', meta);

    const cities = meta.records.map((rec: any) => {
      return rec.fields.city;
    }).filter((city: string) => !!city);

    console.log('cities ? ', cities);

    const categories = meta.records.map((rec: any) => {
      return rec.fields.category;
    }).filter((category: string) => !!category);

    const newCache = { categories };
    await Promise.all(cities.map(async (city: string) => {
      const numbers = await getRecordsFromLocation(city);
      // @ts-ignore
      newCache[city] = numbers;
      return null;
    }));

    if (_.isEqual(this.state.cache, newCache)) {
      return null;
    }

    const newCacheStr = JSON.stringify(newCache);
    try {
      await AsyncStorage.setItem('cache', newCacheStr);
      this.setState({
        cache: newCache,
      });
    } catch (err) {
      console.error(err);
    }
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
