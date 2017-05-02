module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true
    },
    extends: 'eslint:recommended',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    'rules': {
        // don't require .vue extension when importing
        // 'import/extensions': ['off', 'always', {
        //     'js': 'never',
        //     'vue': 'never'
        // }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        /*
         * Possible offs
         */

        // disallow unnecessary parentheses
        'no-extra-parens': ['off', 'all', {'nestedBinaryExpressions': false}],

        // disallow negating the left operand of relational operators
        'no-unsafe-negation': 'off',

        // enforce valid JSDoc comments
        'valid-jsdoc': 'off',

        /*
         * Best Practices
         */

        // enforce return statements in callbacks of array methods
        'array-callback-return': 'off',

        // enforce consistent brace style for all control statements
        curly: ['off', 'multi-line'],

        // enforce consistent newlines before and after dots
        'dot-location': ['off', 'property'],

        // enforce dot notation whenever possible
        'dot-notation': 'off',

        // require the use of === and !==
        'eqeqeq': ['off', 'smart'],

        // disallow the use of arguments.caller or arguments.callee
        'no-caller': 'off',

        // disallow empty functions
        'no-empty-function': 'off',

        // disallow unnecessary calls to .bind()
        'no-extra-bind': 'off',

        // disallow unnecessary labels
        'no-extra-label': 'off',

        // disallow leading or trailing decimal points in numeric literals
        'no-floating-decimal': 'off',

        // disallow assignments to native objects or read-only global variables
        'no-global-assign': 'off',

        // disallow the use of eval()-like methods
        'no-implied-eval': 'off',

        // disallow the use of the __iterator__ property
        'no-iterator': 'off',

        // disallow unnecessary nested blocks
        'no-lone-blocks': 'off',

        // disallow multiple spaces
        'no-multi-spaces': 'off',

        // disallow new operators with the String, Number, and Boolean objects
        'no-new-wrappers': 'off',

        // disallow octal escape sequences in string literals
        'no-octal-escape': 'off',

        // disallow the use of the __proto__ property
        'no-proto': 'off',

        // disallow comparisons where both sides are exactly the same
        'no-self-compare': 'off',

        // disallow throwing literals as exceptions
        'no-throw-literal': 'off',

        // disallow unused expressions
        'no-unused-expressions': 'off',

        // disallow unnecessary calls to .call() and .apply()
        'no-useless-call': 'off',

        // disallow unnecessary concatenation of literals or template literals
        'no-useless-concat': 'off',

        // disallow unnecessary escape characters
        'no-useless-escape': 'off',

        // disallow void operators
        'no-void': 'off',

        // require parentheses around immediate function invocations
        'wrap-iife': 'off',

        // require or disallow “Yoda” conditions
        yoda: 'off',

        /*
         * Variables
         */

        // disallow labels that share a name with a variable
        'no-label-var': 'off',

        // disallow initializing variables to undefined
        'no-undef-init': 'off',
        'no-undef': 'off',
        // disallow the use of variables before they are defined
        'no-use-before-define': 'off',

        /*
         * Node.js and CommonJS
         */

        // disallow new operators with calls to require
        'no-new-require': 'off',

        /*
         * Stylistic Issues
         */

        // enforce consistent spacing inside array brackets
        'array-bracket-spacing': 'off',

        // enforce consistent spacing inside single-line blocks
        'block-spacing': 'off',

        // enforce consistent brace style for blocks
        'brace-style': ['off', '1tbs', {'allowSingleLine': true}],

        // require or disallow trailing commas
        'comma-dangle': 'off',

        // enforce consistent spacing before and after commas
        'comma-spacing': 'off',

        // enforce consistent comma style
        'comma-style': 'off',

        // enforce consistent spacing inside computed property brackets
        'computed-property-spacing': 'off',

        // require or disallow spacing between function identifiers and their invocations
        'func-call-spacing': 'off',

        // enforce consistent indentation
        indent: ['off', 2, {SwitchCase: 1}],

        // enforce the consistent use of either double or single quotes in JSX attributes
        'jsx-quotes': 'off',

        // enforce consistent spacing between keys and values in object literal properties
        'key-spacing': 'off',

        // enforce consistent spacing before and after keywords
        'keyword-spacing': 'off',

        // enforce consistent linebreak style
        'linebreak-style': 'off',

        // require or disallow newlines around directives
        'lines-around-directive': 'off',

        // require constructor names to begin with a capital letter
        'new-cap': 'off',

        // require parentheses when invoking a constructor with no arguments
        'new-parens': 'off',

        // disallow Array constructors
        'no-array-constructor': 'off',

        // disallow Object constructors
        'no-new-object': 'off',

        // disallow trailing whitespace at the end of lines
        'no-trailing-spaces': 'off',

        // disallow ternary operators when simpler alternatives exist
        'no-unneeded-ternary': 'off',

        // disallow whitespace before properties
        'no-whitespace-before-property': 'off',

        // enforce consistent spacing inside braces
        'object-curly-spacing': ['off', 'always'],

        // require or disallow padding within blocks
        'padded-blocks': ['off', 'never'],

        // require quotes around object literal property names
        'quote-props': ['off', 'as-needed'],

        // enforce the consistent use of either backticks, double, or single quotes
        quotes: ['off', 'single'],

        // enforce consistent spacing before and after semicolons
        'semi-spacing': 'off',

        // require or disallow semicolons instead of ASI
        // semi: ['off', 'never'],

        // enforce consistent spacing before blocks
        'space-before-blocks': 'off',

        'no-console': 'off',

        // enforce consistent spacing before function definition opening parenthesis
        'space-before-function-paren': ['off', 'never'],

        // enforce consistent spacing inside parentheses
        'space-in-parens': 'off',

        // require spacing around infix operators
        'space-infix-ops': 'off',

        // enforce consistent spacing before or after unary operators
        'space-unary-ops': 'off',

        // enforce consistent spacing after the // or /* in a comment
        'spaced-comment': 'off',

        // require or disallow Unicode byte order mark (BOM)
        'unicode-bom': 'off',


        /*
         * ECMAScript 6
         */

        // require braces around arrow function bodies
        'arrow-body-style': 'off',

        // require parentheses around arrow function arguments
        'arrow-parens': ['off', 'as-needed'],

        // enforce consistent spacing before and after the arrow in arrow functions
        'arrow-spacing': 'off',

        // enforce consistent spacing around * operators in generator functions
        'generator-star-spacing': ['off', 'after'],

        // disallow duplicate module imports
        'no-duplicate-imports': 'off',

        // disallow unnecessary computed property keys in object literals
        'no-useless-computed-key': 'off',

        // disallow unnecessary constructors
        'no-useless-constructor': 'off',

        // disallow renaming import, export, and destructured assignments to the same name
        'no-useless-rename': 'off',

        // require let or const instead of var
        'no-var': 'off',

        // require or disallow method and property shorthand syntax for object literals
        'object-shorthand': 'off',

        // require arrow functions as callbacks
        'prefer-arrow-callback': 'off',

        // require const declarations for variables that are never reassigned after declared
        'prefer-const': 'off',

        // disallow parseInt() in favor of binary, octal, and hexadecimal literals
        'prefer-numeric-literals': 'off',

        // require rest parameters instead of arguments
        'prefer-rest-params': 'off',

        // require spread operators instead of .apply()
        'prefer-spread': 'off',

        // enforce spacing between rest and spread operators and their expressions
        'rest-spread-spacing': 'off',

        // require or disallow spacing around embedded expressions of template strings
        'template-curly-spacing': 'off',

        // require or disallow spacing around the * in yield* expressions
        'yield-star-spacing': 'off'
    }
}
