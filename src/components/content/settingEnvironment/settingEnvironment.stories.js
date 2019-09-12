import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import VscodeConfig from './vscodeConfig'
import CodeSandbox from './codeSandbox'

storiesOf('CONTENTS|Setting Environment', module)
  .add('vscode Config', () => <VscodeConfig />)
  .add('Code Sandbox', () => <CodeSandbox />)
