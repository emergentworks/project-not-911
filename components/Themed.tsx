import * as React from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';

import {Styles} from '../constants';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Styles.light & keyof typeof Styles.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Styles[theme][colorName];
  }
}

type ThemeProps = {
  bold?: true,
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

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
