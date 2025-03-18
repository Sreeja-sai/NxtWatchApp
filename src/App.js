import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import LoginRoute from './components/Login'

import ProtectRoute from './components/ProtectedRoute'

import Home from './components/Home'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import Saved from './components/Saved'

import VideoItemDetails from './components/VideoItemDetails'

import NotFound from './components/NotFound'

import SavedContext from './contexts/SavedContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    savedVideosList: [],
    likedVideosList: [],
    disLikeVideosList: [],
    isLightMode: true,
  }

  addToSavedVideo = videoData => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videoData],
    }))
  }

  removeSavedVideo = videoData => {
    const {savedVideosList} = this.state
    this.setState({
      savedVideosList: savedVideosList.filter(
        eachCard => eachCard.id !== videoData.id,
      ),
    })
  }

  addedToLikedVideos = videoData => {
    const {disLikeVideosList} = this.state
    const existsInDislikeVideosList = disLikeVideosList.some(
      eachVideo => eachVideo.id,
    )
    if (existsInDislikeVideosList) {
      this.setState({
        disLikeVideosList: disLikeVideosList.filter(
          eachVideo => eachVideo.id !== videoData.id,
        ),
      })
    }
    this.setState(prevState => ({
      likedVideosList: [...prevState.likedVideosList, videoData],
    }))
  }

  removedFromLikedVideos = videoData => {
    const {likedVideosList} = this.state
    this.setState({
      likedVideosList: likedVideosList.filter(
        eachCard => eachCard.id !== videoData.id,
      ),
    })
  }

  addedToDislikedVideos = videoData => {
    const {likedVideosList} = this.state
    const existsInLikedVideos = likedVideosList.some(
      eachVideo => eachVideo.id === videoData.id,
    )
    if (existsInLikedVideos) {
      this.setState({
        likedVideosList: likedVideosList.filter(
          eachVideo => eachVideo.id !== videoData.id,
        ),
      })
    }
    this.setState(prevState => ({
      disLikeVideosList: [...prevState.disLikeVideosList, videoData],
    }))
  }

  removedFromDislikedVideos = videoData => {
    const {disLikeVideosList} = this.state
    this.setState({
      disLikeVideosList: disLikeVideosList.filter(
        eachCard => eachCard.id !== videoData.id,
      ),
    })
  }

  changeMode = () => {
    const {isLightMode} = this.state
    this.setState({isLightMode: !isLightMode})
  }

  render() {
    const {
      savedVideosList,
      likedVideosList,
      disLikeVideosList,
      isLightMode,
    } = this.state
    console.log(isLightMode)
    return (
      <SavedContext.Provider
        value={{
          savedVideosList,
          likedVideosList,
          disLikeVideosList,
          isLightMode,
          addedToLikedVideos: this.addedToLikedVideos,
          removedFromLikedVideos: this.removedFromLikedVideos,
          addedToDislikedVideos: this.addedToDislikedVideos,
          removedFromDislikedVideos: this.removedFromDislikedVideos,
          addToSavedVideo: this.addToSavedVideo,
          removeSavedVideo: this.removeSavedVideo,
          changeMode: this.changeMode,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectRoute exact path="/" component={Home} />
          <ProtectRoute exact path="/trending" component={Trending} />
          <ProtectRoute exact path="/gaming" component={Gaming} />
          <ProtectRoute exact path="/saved-videos" component={Saved} />
          <ProtectRoute exact path="/videos/:id" component={VideoItemDetails} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </SavedContext.Provider>
    )
  }
}

export default App
