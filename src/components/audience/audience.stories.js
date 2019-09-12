import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import QuantityOfPeople from './quantityOfPeople'
import RequiredTechnicalSkills from './requiredTechnicalSkills'

storiesOf('DEFINITION|About Audience', module)
  .add('Quantity of People', () => <QuantityOfPeople />)
  .add('Required Technical Skills', () => <RequiredTechnicalSkills />)
