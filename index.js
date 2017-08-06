"use strict";

module.exports = {
    "rules": {
        // Possible Errors
        // http://eslint.org/docs/rules/#possible-errors
        // ---------------------------------------------
        // "for-direction": "off",
        // "no-await-in-loop": "off",
        // "no-compare-neg-zero": "error", // eslint:recommended
        "no-cond-assign": "off", // eslint:recommended
        "no-console": "off", // eslint:recommended
        // "no-constant-condition": "error", // eslint:recommended
        // "no-control-regex": "error", // eslint:recommended
        // "no-debugger": "error", // eslint:recommended
        // "no-dupe-args": "error", // eslint:recommended
        // "no-dupe-keys": "error", // eslint:recommended
        // "no-duplicate-case": "error", // eslint:recommended
        // "no-empty": "error", // eslint:recommended
        // "no-empty-character-class": "error", // eslint:recommended
        // "no-ex-assign": "error", // eslint:recommended
        // "no-extra-boolean-cast": "error", // eslint:recommended
        // "no-extra-parens": "off",
        // "no-extra-semi": "error", // eslint:recommended
        // "no-func-assign": "error", // eslint:recommended
        // "no-inner-declarations": "error", // eslint:recommended
        // "no-invalid-regexp": "error", // eslint:recommended
        "no-irregular-whitespace": "error", // eslint:recommended
        // "no-obj-calls": "error", // eslint:recommended
        // "no-prototype-builtins": "off",
        // "no-regex-spaces": "error", // eslint:recommended
        // "no-sparse-arrays": "error", // eslint:recommended
        // "no-template-curly-in-string": "off",
        "no-unexpected-multiline": "error", // eslint:recommended
        // "no-unreachable": "error", // eslint:recommended
        // "no-unsafe-finally": "error", // eslint:recommended
        // "no-unsafe-negation": "off",
        // "use-isnan": "error" // eslint:recommended
        "valid-jsdoc": ["error", {
            "requireParamDescription": false,
            "requireReturnDescription": false,
            "requireReturn": false,
            "prefer": {"returns": "return"},
        }],
        // "valid-typeof": "error" // eslint:recommended


        // Best Practices
        // http://eslint.org/docs/rules/#best-practices
        // --------------------------------------------
        // "accessor-pairs": "off",
        // "array-callback-return": "off",
        // "block-scoped-var": "off",
        // "class-methods-use-this": "off",
        // "complexity": "off",
        // "consistent-return": "off"
        "curly": ["error", "multi-line"],
        // "default-case": "off",
        // "dot-location": "off",
        // "dot-notation": "off",
        "eqeqeq": "error",
        "guard-for-in": "error",
        // "no-alert": "off",
        "no-caller": "error",
        // "no-case-declarations": "error", // eslint:recommended
        // "no-div-regex": "off",
        // "no-else-return": "off",
        // "no-empty-function": "off",
        // "no-empty-pattern": "error", // eslint:recommended
        // "no-eq-null": "off",
        // "no-eval": "off",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        // "no-extra-label": "off",
        // "no-fallthrough": "error", // eslint:recommended
        // "no-floating-decimal": "off",
        // "no-global-assign": "off",
        // "no-implicit-coercion": "off",
        // "no-implicit-globals": "off",
        // "no-implied-eval": "off",
        "no-invalid-this": "error",
        // "no-iterator": "off",
        // "no-labels": "off",
        // "no-lone-blocks": "off",
        // "no-loop-func": "off",
        // "no-magic-numbers": "off",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        // "no-new": "off",
        // "no-new-func": "off",
        "no-new-wrappers": "error",
        // "no-octal": "error", // eslint:recommended
        // "no-octal-escape": "off",
        // "no-param-reassign": "off",
        // "no-proto": "off",
        // "no-redeclare": "error", // eslint:recommended
        // "no-restricted-properties": "off",
        // "no-return-assign": "off",
        // "no-script-url": "off",
        // "no-self-assign": "error", // eslint:recommended
        // "no-self-compare": "off",
        // "no-sequences": "off",
        "no-throw-literal": "error", // eslint:recommended
        // "no-unmodified-loop-condition": "off",
        // "no-unused-expressions": "off",
        // "no-unused-labels": "error", // eslint:recommended
        // "no-useless-call": "off",
        // "no-useless-concat": "off",
        // "no-useless-escape": "off",
        // "no-void": "off",
        // "no-warning-comments": "off",
        "no-with": "error",
        // "prefer-promise-reject-errors": "off",
        // "radix": "off",
        "require-await": "error",
        // "vars-on-top": "off",
        // "wrap-iife": "off",
        // "yoda": "off",

        // Strict Mode
        // http://eslint.org/docs/rules/#strict-mode
        // -----------------------------------------
        // "strict": "off",

        // Variables
        // http://eslint.org/docs/rules/#variables
        // ---------------------------------------
        // "init-declarations": "off",
        // "no-catch-shadow": "off",
        // "no-delete-var": "error", // eslint:recommended
        // "no-label-var": "off",
        // "no-restricted-globals": "off",
        // "no-shadow": "off",
        // "no-shadow-restricted-names": "off",
        // "no-undef": "error", // eslint:recommended
        // "no-undef-init": "off",
        // "no-undefined": "off",
        "no-unused-vars": ["error", {"args": "none"}], // eslint:recommended
        // "no-use-before-define": "off",

        // Node.js and CommonJS
        // http://eslint.org/docs/rules/#nodejs-and-commonjs
        // -------------------------------------------------
        // "callback-return": "off",
        // "global-require": "off",
        // "handle-callback-err": "off",
        // "no-buffer-constructor": "off",
        // "no-mixed-requires": "off",
        // "no-new-require": "off",
        // "no-path-concat": "off",
        // "no-process-env": "off",
        // "no-process-exit": "off",
        // "no-restricted-modules": "off",
        // "no-sync": "off",

        // Stylistic Issues
        // http://eslint.org/docs/rules/#stylistic-issues
        // ----------------------------------------------
        "array-bracket-newline": "off", // eslint:recommended
        "array-bracket-spacing": ["error", "never"],
        "array-element-newline": "off", // eslint:recommended
        "block-spacing": ["error", "never"],
        "brace-style": "error",
        "camelcase": "off", // project-dependent
        // "capitalized-comments": "off",
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": "error",
        // "consistent-this": "off",
        "eol-last": "error",
        "func-call-spacing": "error",
        // "func-name-matching": "off",
        // "func-names": "off",
        // "func-style": "off",
        // "id-blacklist": "off",
        // "id-length": "off",
        // "id-match": "off",
        "indent": ["error", 4, {"SwitchCase": 1}],
        // "jsx-quotes": "off",
        "key-spacing": "error",
        "keyword-spacing": "error",
        // "line-comment-position": "off",
        "linebreak-style": "off", // git handles this
        // "lines-around-comment": "off",
        // "max-depth": "off",
        "max-len": ["warn", {
            "code": 160,
            "ignoreUrls": true
        }],
        // "max-lines": "off",
        // "max-nested-callbacks": "off",
        // "max-params": "off",
        // "max-statements": "off",
        // "max-statements-per-line": "off",
        // "multiline-ternary": "off",
        "new-cap": ["error", {
            "capIsNewExceptionPattern": "express\\.Router" // express
        }],
        // "new-parens": "off",
        // "newline-per-chained-call": "off",
        "no-array-constructor": "error",
        // "no-bitwise": "off",
        // "no-continue": "off",
        // "no-inline-comments": "off",
        // "no-lonely-if": "off",
        // "no-mixed-operators": "off",
        "no-mixed-spaces-and-tabs": "error", // eslint:recommended
        // "no-multi-assign": "off",
        "no-multiple-empty-lines": ["warn", {"max": 3}],
        // "no-negated-condition": "off",
        // "no-nested-ternary": "off",
        "no-new-object": "error",
        // "no-plusplus": "off",
        // "no-restricted-syntax": "off",
        "no-tabs": "error",
        // "no-ternary": "off",
        "no-trailing-spaces": "error",
        // "no-underscore-dangle": "off",
        // "no-unneeded-ternary": "off",
        // "no-whitespace-before-property": "off",
        // "nonblock-statement-body-position": "off",
        // "object-curly-newline": "off",
        "object-curly-spacing": "error",
        // "object-property-newline": "off",
        "one-var": ["error", {
            "initialized": "never",
            "uninitialized": "always"
        }],
        // "one-var-declaration-per-line": "off",
        // "operator-assignment": "off",
        // "operator-linebreak": "off",
        "padded-blocks": "off",
        // "padding-line-between-statements": "off",
        "quote-props": ["error"],
        "quotes": ["error", "double", {
            "allowTemplateLiterals": true
        }],
        "require-jsdoc": ["warn", {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": true,
                "ClassDeclaration": true,
            },
        }],
        "semi": "error",
        "semi-spacing": "error",
        // "semi-style": "off",
        // "sort-keys": "off",
        // "sort-vars": "off",
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", {
            "asyncArrow": "always",
            "anonymous": "never",
            "named": "never",
        }],
        // "space-in-parens": "off",
        // "space-infix-ops": "off",
        // "space-unary-ops": "off",
        "spaced-comment": ["error", "always"],
        "switch-colon-spacing": "error",
        // "template-tag-spacing": "off",
        // "unicode-bom": "off",
        // "wrap-regex": "off",

        // ECMAScript 6
        // http://eslint.org/docs/rules/#ecmascript-6
        // ------------------------------------------
        // "arrow-body-style": "off",
        "arrow-parens": ["error", "always"],
        // "arrow-spacing": "off",
        "constructor-super": "error", // eslint:recommended
        "generator-star-spacing": ["error", "after"],
        // "no-class-assign": "off",
        // "no-confusing-arrow": "off",
        // "no-const-assign": "off", // eslint:recommended
        // "no-dupe-class-members": "off", // eslint:recommended
        // "no-duplicate-imports": "off",
        "no-new-symbol": "error", // eslint:recommended
        // "no-restricted-imports": "off",
        "no-this-before-super": "error", // eslint:recommended
        // "no-useless-computed-key": "off",
        // "no-useless-constructor": "off",
        // "no-useless-rename": "off",
        "no-var": "error",
        // "object-shorthand": "off",
        // "prefer-arrow-callback": "off",
        // "prefer-const": "off",
        // "prefer-destructuring": "off",
        // "prefer-numeric-literals": "off",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        // "prefer-template": "off",
        // "require-yield": "error", // eslint:recommended
        "rest-spread-spacing": "error",
        // "sort-imports": "off",
        // "symbol-description": "off",
        // "template-curly-spacing": "off",
        "yield-star-spacing": ["error", "after"],
    }
};