import AsyncStorage from '@react-native-community/async-storage';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';

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

/*
TODO:
1. continue using AsyncStorage if requestPermission is denied
2. figure out what we want to do if people want to change location
3. "reverse geocoding" (convert coordinates to a human readable location) - google API? we could maybe use airtable integrations here
4. UX
-> where to display your current location
-> what does this do? (ex: reorder the list of cities? take you straight to your city?)
-> is there a new landing page?

*/

export class LocationManager extends React.Component<any, any> {
  state = {
    location: null as tCacheUnion | null,
  };

  async componentDidMount() {
    try {
      // first, try to get geolocation
      const locationRequest = await Location.requestPermissionsAsync();

      // if permission is not granted, use AsyncStorage instead
      // TODO: check that 'granted' is really the right thing to compare to?
      // if (locationRequest. === "none") {
      //  const savedLocation = await AsyncStorage.getItem('location');
      // }
      // else {
      const location = await Location.getCurrentPositionAsync({});
      // }
      console.log('Location: ', location);


      /* if (savedLocation
        && savedLocation !== this.state.location) {
        this.setState({
          location: savedLocation,
        });*/


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
