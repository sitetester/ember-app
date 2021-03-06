module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true
	},
	"extends": "eslint:recommended",
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 7,
		"sourceType": "module"
	},
	"globals": {
		"describe": true,
		"it": true,
		"before": true,
		"after": true
	},
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"single",
			{
				"avoidEscape": true,
				"allowTemplateLiterals": true
			}
		],
		"semi": [
			"error",
			"always"
		],
		"curly": [
			"error",
			"multi-line"
		],
		"dot-notation": [
			"error"
		],
		"no-unused-vars": [
			"error",
			{
				"vars": "all",
				"args": "after-used"
			}
		],
		"eol-last": [
			"error",
			"unix"
		],
		"no-multiple-empty-lines": [
			"error",
			{
				"max": 2
			}
		],
		"no-path-concat": [
			"error"
		],
		"camelcase": [
			"error"
		],
		"arrow-parens": [
			"error"
		],
		"arrow-spacing": [
			"error"
		],
		"no-const-assign": [
			"error"
		],
		"no-class-assign": [
			"error"
		],
		"no-new-symbol": [
			"error"
		],
		"template-curly-spacing": [
			"error",
			"never"
		],
		"prefer-template": [
			"error"
		],
		"no-array-constructor": [
			"error"
		],
		"no-shadow": [
			"error"
		],
		"no-cond-assign": [
			"error",
			"except-parens"
		],
		"no-trailing-spaces": [
			"error"
		],
		"no-else-return": [
			"error"
		],
		"use-isnan": [
			"error"
		],
		"no-use-before-define": [
			"error",
			{
				"functions": false,
				"classes": true
			}
		],
		"no-duplicate-imports": [
			"error",
			{
				"includeExports": true
			}
		],
		"prefer-arrow-callback": [
			"error",
			{
				"allowNamedFunctions": true
			}
		],
		"require-jsdoc": [
			"error",
			{
				"require": {
					"FunctionDeclaration": true,
					"MethodDefinition": false,
					"ClassDeclaration": false
				}
			}
		],
		"keyword-spacing": [
			"error"
		],
		"valid-jsdoc": [
			"error",
			{
				"requireReturn": false,
				"prefer": {
					"return": "returns"
				}
			}
		]
	}
};
