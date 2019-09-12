import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Description from './description'

storiesOf('WORKSHOP|Welcome', module).add('Description', () => <Description />)
