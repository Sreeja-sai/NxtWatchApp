import {Component} from 'react'

import Header from '../Header'

import SideNavBar from '../SideNavBar'

import AllSavedVideos from '../AllSavedVideos'

import SavedContext from '../../contexts/SavedContext'

// import PremiumSection from '../PremiumSection'

// import AllGamingVideoSection from '../AllGamingVideosSection'

import {
  HomeContainer,
  MainSectionContainer,
  AppMainContainer,
} from '../Home/StyledComponent'

class Saved extends Component {
  render() {
    return (
      <SavedContext.Consumer>
        {value => {
          const {isLightMode} = value
          return (
            <HomeContainer>
              <Header />
              <MainSectionContainer>
                <SideNavBar />
                <AppMainContainer lightMode={isLightMode}>
                  <AllSavedVideos />
                </AppMainContainer>
              </MainSectionContainer>
            </HomeContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default Saved
