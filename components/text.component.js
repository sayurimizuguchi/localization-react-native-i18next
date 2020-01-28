import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

type Props = {
	keyText: String,
};

export const TextComponent = ({ keyText, ...rest }: Props) => {
	const { t } = useTranslation();

	return (
		<View>
			<Text style={textStyle.text} {...rest}>
				{t(keyText)}
			</Text>
		</View>
	)
}

const textStyle = StyleSheet.create({
  text: {
		fontSize: 20,
		marginBottom: 20
  },
});
