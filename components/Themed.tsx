import * as React from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';

import {Styles} from '../constants';
import { useTheme } from '../context';

/**
 * @description helper function for getting default styles below for light/dark schemes
 */
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Styles.light & keyof typeof Styles.dark
) {
  const {mode}: {mode: 'light' | 'dark'} = useTheme();
  const colorFromProps = props[mode];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Styles[mode][colorName];
  }
}

type ThemeProps = {
  bold?: true,
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

/**
 * @description generic themed Text component. works just like the react native Text
 * but defaults to our font and uses the right dark/light color based on theme
 */
export function Text(props: TextProps) {
  const { bold, style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({
    light: lightColor,
    dark: darkColor
  }, 'text');

  let fontFamily = 'Inter_400Regular';
  if (bold) {
    fontFamily = 'Inter_700Bold';
  }

  return (
    <DefaultText
      style={[{ color, fontFamily, }, style]}
      {...otherProps}
    />
  );
}

/**
 * @description generic themed View component. works just like the react native View
 * but uses the right dark/light color based on theme
 */
export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({
    light: lightColor,
    dark: darkColor,
  }, 'background');

  return (
    <DefaultView
      style={[{ backgroundColor }, style]}
      {...otherProps}
    />
  );
}
