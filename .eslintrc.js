module.exports = {
  root: true,
	extends: 'airbnb',
	parser: "babel-eslint",
	plugins: ["jsx-a11y", "import", "react"],
	rules: {
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"import/prefer-default-export": 0,
		"no-use-before-define": 0,
		'react/jsx-props-no-spreading': 0,
		"arrow-body-style": ["error", "as-needed"],
		"global-require": 0,
		"no-multiple-empty-lines": [
      "error",
      { "max": 1, "maxBOF": 0, "maxEOF": 0 }
    ],
	}
};
