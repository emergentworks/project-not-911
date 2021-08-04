import React from 'react';
import { AsyncStorage } from 'react-native';
import _ from 'lodash';

import { Styles } from '../constants';


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
        if (!_.isEqual(this.state.cache, parsedCache)) {
          this.setState({
            cache: parsedCache,
          });
        }
      }
    } catch (err) { }
  }

  setCache = async () => {
    const newCache = JSON.stringify({});
    try {
      await AsyncStorage.setItem('cache', newCache);
      this.setState({
        cache: newCache,
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
