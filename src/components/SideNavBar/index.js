import {Link} from 'react-router-dom'

import {MdHome} from 'react-icons/md'

import {SiYoutubegaming} from 'react-icons/si'

import {HiFire} from 'react-icons/hi'

import {CgPlayListAdd} from 'react-icons/cg'

import SavedContext from '../../contexts/SavedContext'

import {
  SideBarContainer,
  EachNavItemsContainer,
  EachNavItemText,
  ContactIcons,
  ContactIconContainer,
  BottomText,
  BottomTextContainer,
} from './StyledComponents'

const SideNavBar = () => (
  <SavedContext.Consumer>
    {value => {
      const {isLightMode} = value
      return (
        <SideBarContainer lightMode={isLightMode}>
          <div>
            <Link to="/" style={{textDecoration: 'none'}}>
              <EachNavItemsContainer lightMode={isLightMode}>
                <MdHome fontSize="20px" />
                <EachNavItemText>Home</EachNavItemText>
              </EachNavItemsContainer>
            </Link>
            <Link to="/trending" style={{textDecoration: 'none'}}>
              <EachNavItemsContainer lightMode={isLightMode}>
                <HiFire fontSize="20px" />
                <EachNavItemText>Trending</EachNavItemText>
              </EachNavItemsContainer>
            </Link>

            <Link to="/gaming" style={{textDecoration: 'none'}}>
              <EachNavItemsContainer lightMode={isLightMode}>
                <SiYoutubegaming fontSize="20px" />
                <EachNavItemText>Gaming</EachNavItemText>
              </EachNavItemsContainer>
            </Link>

            <Link to="/saved-videos" style={{textDecoration: 'none'}}>
              <EachNavItemsContainer lightMode={isLightMode}>
                <CgPlayListAdd fontSize="20px" />
                <EachNavItemText>Saved Videos</EachNavItemText>
              </EachNavItemsContainer>
            </Link>
          </div>
          <BottomTextContainer lightMode={isLightMode}>
            <p>CONTACT US</p>
            <ContactIconContainer>
              <ContactIcons src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" />
              <ContactIcons src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" />
              <ContactIcons src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" />
            </ContactIconContainer>
            <BottomText>
              Enjoy! Now you can see your recommondations!
            </BottomText>
          </BottomTextContainer>
        </SideBarContainer>
      )
    }}
  </SavedContext.Consumer>
)

export default SideNavBar
