import React from 'react';
import { AsyncStorage } from 'react-native';

// initiate context
export const ManageLocationContext: React.Context<any> = React.createContext({
  location: null,
  saveLocation: () => {},
});

// define useLocation hook for functional components
export const useLocation = () => React.useContext(ManageLocationContext);

/**
 * @description initializes theme based on OS theme - but allow for toggling
 */
export class LocationManager extends React.Component<any, any> {
  state = {
    location: null,
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

  saveLocation = async (newLocation: string) => {
    try {
      await AsyncStorage.setItem('location', newLocation);
      this.setState({
        location: newLocation,
      });
    } catch (err) {
        console.error(err);
    }
  }

  render () {
    return (
      <ManageLocationContext.Provider
        value={{
          location: this.state.location,
          saveLocation: this.saveLocation
        }}>
        {this.props.children}
      </ManageLocationContext.Provider>
    );
  }
}
