import {Link} from 'react-router-dom'

import {MdHome} from 'react-icons/md'

import {SiYoutubegaming} from 'react-icons/si'

import {HiFire} from 'react-icons/hi'

import {CgPlayListAdd} from 'react-icons/cg'

import {
  SideBarContainer,
  EachNavItemsContainer,
  EachNavItemText,
  ContactIcons,
  ContactIconContainer,
  BottomText,
} from './StyledComponents'

const SideNavBar = () => (
  <SideBarContainer>
    <div>
      <Link to="/" style={{textDecoration: 'none'}}>
        <EachNavItemsContainer>
          <MdHome fontSize="20px" />
          <EachNavItemText>Home</EachNavItemText>
        </EachNavItemsContainer>
      </Link>
      <Link to="/trending" style={{textDecoration: 'none'}}>
        <EachNavItemsContainer>
          <HiFire fontSize="20px" />
          <EachNavItemText>Trending</EachNavItemText>
        </EachNavItemsContainer>
      </Link>

      <Link to="/gaming" style={{textDecoration: 'none'}}>
        <EachNavItemsContainer>
          <SiYoutubegaming fontSize="20px" />
          <EachNavItemText>Gaming</EachNavItemText>
        </EachNavItemsContainer>
      </Link>

      <Link to="/saved-videos" style={{textDecoration: 'none'}}>
        <EachNavItemsContainer>
          <CgPlayListAdd fontSize="20px" />
          <EachNavItemText>Saved Videos</EachNavItemText>
        </EachNavItemsContainer>
      </Link>
    </div>
    <div>
      <p>CONTACT US</p>
      <ContactIconContainer>
        <ContactIcons src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" />
        <ContactIcons src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" />
        <ContactIcons src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" />
      </ContactIconContainer>
      <BottomText>Enjoy! Now you can see your recommondations!</BottomText>
    </div>
  </SideBarContainer>
)

export default SideNavBar
