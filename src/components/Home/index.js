import {Component} from 'react'

import Header from '../Header'

import SideNavBar from '../SideNavBar'

import {HomeContainer, MainSectionContainer} from './StyledComponent'

import AppMainSection from '../AppMainSection'

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <div>
          <Header />
        </div>
        <MainSectionContainer>
          <SideNavBar />
          <AppMainSection />
        </MainSectionContainer>
      </HomeContainer>
    )
  }
}

export default Home
