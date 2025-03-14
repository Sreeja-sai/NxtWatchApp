import {Component} from 'react'

import Header from '../Header'

import SideNavBar from '../SideNavBar'

import AllSavedVideos from '../AllSavedVideos'

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
      <HomeContainer>
        <Header />
        <MainSectionContainer>
          <SideNavBar />
          <AppMainContainer>
            <AllSavedVideos />
          </AppMainContainer>
        </MainSectionContainer>
      </HomeContainer>
    )
  }
}

export default Saved
