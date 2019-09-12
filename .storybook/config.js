import { configure, addParameters } from '@storybook/react'
// import '../src/index.css'

// import { addParameters } from '@storybook/react'
import { themes } from '@storybook/theming'
import yourTheme from './yourTheme'

// Option defaults.
addParameters({
  options: {
    theme: yourTheme
  }
})
// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
