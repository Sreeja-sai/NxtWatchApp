import {FaMoon, FaSun} from 'react-icons/fa'

// import {CiLight} from 'react-icons/ci'

import {
  HeaderContainer,
  HeaderLogo,
  HeaderRightSection,
  UserLogo,
  LogoutButton,
} from './StyledComponents'

const Header = () => (
  <HeaderContainer>
    <div>
      <HeaderLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
    </div>
    <HeaderRightSection>
      <FaMoon fontSize="20px" />
      <UserLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
      <LogoutButton>Logout</LogoutButton>
    </HeaderRightSection>
  </HeaderContainer>
)

export default Header
