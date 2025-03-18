import {Component} from 'react'

import Header from '../Header'

import SideNavBar from '../SideNavBar'

import PremiumSection from '../PremiumSection'

import AllVideosSection from '../AllVideosSection'

import {
  HomeContainer,
  MainSectionContainer,
  AppMainContainer,
} from './StyledComponent'

// import HomeSection from '../HomeSection'

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
        <MainSectionContainer>
          <SideNavBar />
          <AppMainContainer>
            <PremiumSection />
            <AllVideosSection />
          </AppMainContainer>
        </MainSectionContainer>
      </HomeContainer>
    )
  }
}

export default Home
