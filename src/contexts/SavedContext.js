import React from 'react'

const SavedContext = React.createContext({
  savedVideosList: [],
  likedVideosList: [],
  disLikeVideosList: [],
  addedToLikedVideos: () => {},
  removedFromLikedVideos: () => {},
  addedToDislikedVideos: () => {},
  removedFromDislikedVideos: () => {},
  addToSavedVideo: () => {},
  removeSavedVideo: () => {},
  isLightMode: true,
  changeMode: () => {},
})

export default SavedContext
