module.exports = {
  root: true,
	extends: 'airbnb',
	parser: "babel-eslint",
	rules: {
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"import/prefer-default-export": 0,
		"no-use-before-define": 0,
		'react/jsx-props-no-spreading': ['off']
	}
};
