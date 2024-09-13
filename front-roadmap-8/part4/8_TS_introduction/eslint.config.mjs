import { default as eslint, default as pluginJs } from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    pluginJs.configs.recommended,
    eslint.configs.recommended,
    ...tseslint.configs.recommended,

    {
        rules: {
            'prefer-const': 'warn',
            'no-var': 'error',
            'no-unused-vars': 'error',
            'no-undef': 'error',
        },
    },
];
