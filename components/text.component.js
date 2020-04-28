import React from 'react';
import { Text } from 'react-native';

import { translate } from '../utils/localize.utils';

type Props = {
  keyText: String,
  interpolation: Object,
  style: Object
};

export const LocaleText = ({
  keyText, interpolation = {}, style, ...rest
}: Props) => {
  const textContent = translate(keyText, interpolation).trim();
  return (
    <Text {...style} {...rest}>
      {textContent}
    </Text>
  );
};
