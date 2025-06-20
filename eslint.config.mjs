import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),

  // 👇 Add your custom rules here
  {
    rules: {
      'react/no-unescaped-entities': 'off', // disables the blocking quote rule
    },
  },
];

export default eslintConfig;
