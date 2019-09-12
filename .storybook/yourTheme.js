import { create } from '@storybook/theming'

export default create({
  base: 'dark',

  colorPrimary: 'hotpink',
  colorSecondary: '#0052cc',

  // UI
  appBg: 'white',
  appContentBg: '#f2f2f2',
  appBorderColor: '#003d99',
  appBorderRadius: 10,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'white',
  barBg: '#0047b3',

  // Form colors
  inputBg: 'white',
  inputBorder: 'black',
  inputTextColor: 'black',
  inputBorderRadius: 10,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://placehold.it/350x150'
})
