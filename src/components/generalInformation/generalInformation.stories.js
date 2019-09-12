import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Managers from './managers'
import WorkshopTeam from './workshopTeam'
import ExternalMaterial from './externalMaterial'

storiesOf('DEFINITION|Workshop Information', module)
  .add('Managers', () => <Managers />)
  .add('Workshop Team', () => <WorkshopTeam />)
  .add('External Material', () => <ExternalMaterial />)
