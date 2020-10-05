import React from 'react';
import { ColorSchemeName } from 'react-native';
import { AsyncStorage } from 'react-native';
import {Appearance} from 'react-native-appearance';

import {Styles} from '../constants';
// import useColorScheme from '../hooks/useColorScheme';

// default colour scheme from OS
const osTheme = Appearance.getColorScheme() || 'light';

// initiate context
export const ManageThemeContext: React.Context<any> = React.createContext({
  mode: osTheme,
  theme: Styles[osTheme],
  toggle: () => {},
});

// define useTheme hook for functional components
export const useTheme = () => React.useContext(ManageThemeContext);

/**
 * @description initializes theme based on OS theme - but allow for toggling
 */
export class ThemeManager extends React.Component<any, any> {
  state = {
    mode: osTheme,
  };

  async componentDidMount() {
    try {
      const savedMode = await AsyncStorage.getItem('theme');
      if (savedMode
          && savedMode !== this.state.mode) {
        this.setState({
          mode: savedMode,
        });
      }
    } catch (err) {}
  }

  toggleTheme = async () => {
    const {mode} = this.state;
    let newMode = 'light';

    if (mode === 'light') {
      newMode = 'dark';
    }

    try {
      await AsyncStorage.setItem('theme', newMode);
      this.setState({
        mode: newMode,
      });
    } catch (err) {}
  }

  render () {
    return (
      <ManageThemeContext.Provider
        value={{
          mode: this.state.mode,
          theme: Styles[this.state.mode],
          toggle: this.toggleTheme,
        }}>
        {this.props.children}
      </ManageThemeContext.Provider>
    );
  }
}
