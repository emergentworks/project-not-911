import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { tCacheUnion } from '../types';

/**
 * @description this component sets and saves a city location using React Context
 */

// initiate context
export const ManageLocationContext: React.Context<any> = React.createContext({
  location: null as tCacheUnion | null,
  saveLocation: () => { },
});

// define useLocation hook for functional components
export const useLocation = () => React.useContext(ManageLocationContext);

export class LocationManager extends React.Component<any, any> {
  state = {
    location: null as tCacheUnion | null,
  };

  async componentDidMount() {
    try {
      const savedLocation = await AsyncStorage.getItem('location');
      if (savedLocation
        && savedLocation !== this.state.location) {
        this.setState({
          location: savedLocation,
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

  saveLocation = async (newLocation: tCacheUnion) => {
    try {
      await AsyncStorage.setItem('location', newLocation);
      this.setState({
        location: newLocation,
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <ManageLocationContext.Provider
        value={{
          location: this.state.location,
          saveLocation: this.saveLocation,
        }}>
        {this.props.children}
      </ManageLocationContext.Provider>
    );
  }
}
