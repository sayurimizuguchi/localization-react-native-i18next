import React from 'react';
import { Text } from 'react-native';

import { translate } from '../services/localization/localize.utils';

type Props = {
  keyText: String,
  interpolation: Object,
  style: Object
};

export const LocaleText = ({
  keyText, interpolation = {}, style = {}, ...rest
}: Props) => {
  const textContent = translate(keyText, interpolation).trim();
  return (
    <Text style={{ ...style }} {...rest}>
      {textContent}
    </Text>
  );
};
