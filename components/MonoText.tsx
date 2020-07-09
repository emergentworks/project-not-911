import React, { memo } from 'react';

import { Text, TextProps } from './Themed';

export const MonoText = memo((props: TextProps) => (
  <Text
    {...props}
    style={[props.style, { fontFamily: 'space-mono' }]}
  />
));
