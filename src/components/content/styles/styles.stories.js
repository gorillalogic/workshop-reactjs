import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import MaterialUI from './materialUI'
import CssInJs from './cssInJs'
import StyleComponents from './styleComponents'

storiesOf('CONTENTS|Styles', module)
  .add('Material UI', () => <MaterialUI />)
  .add('Css in Js', () => <CssInJs />)
  .add('Style Components', () => <StyleComponents />)
