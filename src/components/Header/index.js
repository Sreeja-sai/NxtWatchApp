import {FaMoon} from 'react-icons/fa'

// import {CiLight} from 'react-icons/ci'

import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

import {
  HeaderContainer,
  HeaderLogo,
  HeaderRightSection,
  UserLogo,
  LogoutButton,
} from './StyledComponents'

const Header = props => {
  const {history} = props
  const logoutClick = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <HeaderContainer>
      <div>
        <HeaderLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
      </div>
      <HeaderRightSection>
        <FaMoon fontSize="20px" />
        <UserLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
        <LogoutButton onClick={logoutClick}>Logout</LogoutButton>
      </HeaderRightSection>
    </HeaderContainer>
  )
}

export default withRouter(Header)
