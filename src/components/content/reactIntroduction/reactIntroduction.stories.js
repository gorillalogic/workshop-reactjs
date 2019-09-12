import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import WhatIs from './whatIs'
import Jsx from './jsx'
import VirtualDom from './virtualDOM'
import StateAndProps from './stateAndProps'
import FunctionalComponent from './functionalComponent'
import ClassComponent from './classComponent'

storiesOf('CONTENTS|React Introduction', module)
  .add('What is React?', () => <WhatIs />)
  .add('Jsx', () => <Jsx />)
  .add('Virtual Dom', () => <VirtualDom />)
  .add('State And Props', () => <StateAndProps />)
  .add('Functional Component', () => <FunctionalComponent />)
  .add('Class Component', () => <ClassComponent />)
