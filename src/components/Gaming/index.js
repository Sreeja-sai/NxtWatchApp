import {Component} from 'react'

import Header from '../Header'

import SideNavBar from '../SideNavBar'

// import PremiumSection from '../PremiumSection'

import AllGamingVideoSection from '../AllGamingVideosSection'

import SavedContext from '../../contexts/SavedContext'

import {
  HomeContainer,
  MainSectionContainer,
  AppMainContainer,
} from '../Home/StyledComponent'

class Gaming extends Component {
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
                  <AllGamingVideoSection />
                </AppMainContainer>
              </MainSectionContainer>
            </HomeContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default Gaming
