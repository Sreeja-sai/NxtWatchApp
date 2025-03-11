import {Switch, Route} from 'react-router-dom'

import LoginRoute from './components/Login'

import Home from './components/Home'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App
