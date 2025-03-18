import {CgPlayListAdd} from 'react-icons/cg'

import SavedContext from '../../contexts/SavedContext'

import EachSavedCard from '../EachSavedCard'

import {
  NoSavedVideos,
  NoSavedVideosContainer,
  SavedVideosContainer,
  PlayListContainer,
  SavedHeader,
  AllSavedVideosContainer,
} from './StyledComponent'

const AllSavedVideos = () => (
  <SavedContext.Consumer>
    {value => {
      const {savedVideosList, isLightMode} = value
      if (savedVideosList.length === 0) {
        return (
          <NoSavedVideosContainer lightMode={isLightMode}>
            <NoSavedVideos
              alt="no saved videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            />
            <h1>No Saved Videos Found</h1>
            <p>You can save your videos while watching them.</p>
          </NoSavedVideosContainer>
        )
      }
      return (
        <SavedVideosContainer lightMode={isLightMode}>
          <PlayListContainer>
            <CgPlayListAdd fontSize="40px" color="red" />
            <SavedHeader>Saved Videos</SavedHeader>
          </PlayListContainer>
          <AllSavedVideosContainer>
            {savedVideosList.map(eachSavedVideo => (
              <EachSavedCard saveVideo={eachSavedVideo} />
            ))}
          </AllSavedVideosContainer>
        </SavedVideosContainer>
      )
    }}
  </SavedContext.Consumer>
)

export default AllSavedVideos
