import {Switch, Route} from 'react-router-dom'

import LoginRoute from './components/Login'

import ProtectRoute from './components/ProtectedRoute'

import Home from './components/Home'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import Saved from './components/Saved'

import VideoItemDetails from './components/VideoItemDetails'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <ProtectRoute exact path="/" component={Home} />
    <ProtectRoute exact path="/trending" component={Trending} />
    <ProtectRoute exact path="/gaming" component={Gaming} />
    <ProtectRoute exact path="/saved-videos" component={Saved} />
    <ProtectRoute exact path="/videos/:id" component={VideoItemDetails} />
  </Switch>
)

export default App
