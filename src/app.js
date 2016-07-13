import 'babel-polyfill'

import React from 'react' // need?
import { render } from 'react-dom'
import Root from './containers/Root'

render(
    <Root />,
    document.getElementById('root')
)
