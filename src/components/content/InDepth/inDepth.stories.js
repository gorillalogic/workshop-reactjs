import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import RenderingElements from './renderingElements'
import HandleEvents from './handleEvents'
import ConditionalRendering from './conditionalRendering'
import ListsAndKeys from './listsAndKeys'

storiesOf('CONTENTS|In Depth', module)
  .add('Rendering Elements', () => <RenderingElements />)
  .add('Handle Events', () => <HandleEvents />)
  .add('Conditional Rendering', () => <ConditionalRendering />)
  .add('Lists And Keys', () => <ListsAndKeys />)
