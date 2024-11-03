import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
export default [prettier, ...svelte.configs['flat/prettier']];

{
  "svelte/first-attribute-linebreak": [
    "error",
    {
      "multiline": "below", // or "beside"
      "singleline": "beside" // "below"
    }
  ]
}
