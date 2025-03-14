import {Component} from 'react'

import Header from '../Header'

import SideNavBar from '../SideNavBar'

// import PremiumSection from '../PremiumSection'

import AllGamingVideoSection from '../AllGamingVideosSection'

import {
  HomeContainer,
  MainSectionContainer,
  AppMainContainer,
} from '../Home/StyledComponent'

class Trending extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
        <MainSectionContainer>
          <SideNavBar />
          <AppMainContainer>
            <AllGamingVideoSection />
          </AppMainContainer>
        </MainSectionContainer>
      </HomeContainer>
    )
  }
}

export default Trending
