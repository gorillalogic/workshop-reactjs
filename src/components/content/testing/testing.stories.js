import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Jest from './jest'
import TestingComponents from './testingComponents'
import TestingServices from './testingServices'

storiesOf('CONTENTS|Testing', module)
  .add('Jest', () => <Jest />)
  .add('Testing Components', () => <TestingComponents />)
  .add('Testing Services', () => <TestingServices />)
