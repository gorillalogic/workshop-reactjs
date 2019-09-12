import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import LetConst from './letConst'
import ArrowFunctions from './arrowFunctions'
import TemplateString from './templateString'
import Destructuring from './destructuring'
import SpreadRestOperator from './spreadRestOperator'
import PromisesAndAsyncAwait from './promisesAndAsyncAwait'

storiesOf('CONTENTS|Introduction to ES6', module)
  .add('Let / Const', () => <LetConst />)
  .add('Arrow Functions', () => <ArrowFunctions />)
  .add('Template String', () => <TemplateString />)
  .add('Destructuring', () => <Destructuring />)
  .add('Spread / Rest Operator', () => <SpreadRestOperator />)
  .add('Promises And Async/Await', () => <PromisesAndAsyncAwait />)
