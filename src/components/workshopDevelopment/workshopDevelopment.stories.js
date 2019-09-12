import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SessionContent from './sessionContent'
import SessionTime from './sessionTime'
import TeamDistribution from './teamDistribution'

storiesOf('DEFINITION|Workshop Development', module)
  .add('Session Content', () => <SessionContent />)
  .add('Session Time', () => <SessionTime />)
  .add('Team Distribution', () => <TeamDistribution />)
