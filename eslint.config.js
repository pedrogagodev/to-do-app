import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["*/.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react-hooks/rules-of-hooks": "error", // Garante que os hooks sejam usados corretamente
      "react-hooks/exhaustive-deps": "warn", // Garante que dependências em useEffect sejam declaradas
      "react/react-in-jsx-scope": "off",
      "no-console": "warn", // Emite avisos para console.log
      "eqeqeq": "error", // Exige o uso de ===
      "no-useless-return": "warn",
  
      // Regras TypeScript
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-module-boundary-types": "off",
  
      // Regras React
      "react/jsx-key": "error", // Garante keys únicas em listas
      "react/no-unknown-property": "error",
    },
  },

];