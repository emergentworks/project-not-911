import React from 'react';
import { AsyncStorage } from 'react-native';
import _ from 'lodash';

import { airtable } from '../utils';
import { getRecordsFromLocation } from '../queries';

// initiate context
export const ManageCacheContext: React.Context<any> = React.createContext({
  cache: {},
  setCache: () => { },
});

// define useCache hook for functional components
export const useCache = () => React.useContext(ManageCacheContext);

/**
 * @description initializes cache
 */
export class CacheManager extends React.Component<any, any> {
  state = {
    cache: {},
  };

  async componentDidMount() {
    try {
      const savedCache = await AsyncStorage.getItem('cache');
      if (typeof savedCache === 'string') {
        const parsedCache = JSON.parse(savedCache);
        console.log('Parsed Cache: ', parsedCache);
        if (!_.isEqual(this.state.cache, parsedCache)) {
          this.setState({
            cache: parsedCache,
          });
        }
      }
    } catch (err) { }
  }

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
    const newCache = JSON.stringify(phoneNumbersByCity);

    try {
      await AsyncStorage.setItem('cache', newCache);
      // this.setState({
      //   cache: newCache,
      // });
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
