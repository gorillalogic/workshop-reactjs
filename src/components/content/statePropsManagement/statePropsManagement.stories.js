import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Redux from './redux'
import MobX from './mobX'
import EasyPeasy from './easyPeasy'

storiesOf('CONTENTS|State-Store Management', module)
  .add('Redux', () => <Redux />)
  .add('MobX', () => <MobX />)
  .add('Easy Peasy', () => <EasyPeasy />)
