import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import StateHooks from './stateHooks'
import EffectHooks from './effectHooks'
import RulesOfHooks from './rulesOfHooks'
import CustomHooks from './customHooks'

storiesOf('CONTENTS|Hooks', module)
  .add('State hooks', () => <StateHooks />)
  .add('Effect hooks', () => <EffectHooks />)
  .add('Rule of hooks', () => <RulesOfHooks />)
  .add('Custom hooks', () => <CustomHooks />)
