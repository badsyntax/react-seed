import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import App from './components/App/App'
import Body from './components/Body/Body'

export default (
<Route handler={App} path='/'>
  <DefaultRoute handler={Body} name='home'/>
</Route>
)
