import {FaMoon} from 'react-icons/fa'

import {BsSun} from 'react-icons/bs'

// import {LuSunMedium} from 'react-icons/lu'

import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

import SavedContext from '../../contexts/SavedContext'

import {
  HeaderContainer,
  HeaderLogo,
  HeaderRightSection,
  UserLogo,
  LogoutButton,
  PopupConfirmationContainer,
  ConfirmationText,
  CancelBtn,
  ConfirmBtn,
} from './StyledComponents'

const Header = props => {
  const {history} = props
  const logoutClick = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  const homeIconClick = () => {
    history.replace('/')
  }
  return (
    <SavedContext.Consumer>
      {value => {
        const {isLightMode, changeMode} = value
        const modeItemClick = () => {
          changeMode()
        }
        return (
          <HeaderContainer lightMode={isLightMode}>
            <div>
              <HeaderLogo
                onClick={homeIconClick}
                src={
                  isLightMode === true
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
              />
            </div>
            <HeaderRightSection>
              {isLightMode ? (
                <FaMoon onClick={modeItemClick} fontSize="20px" />
              ) : (
                <BsSun
                  onClick={modeItemClick}
                  fontSize="20px"
                  color="#ffffff"
                />
              )}

              <UserLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
              <Popup
                modal
                trigger={
                  <LogoutButton lightMode={isLightMode}>Logout</LogoutButton>
                }
              >
                {close => (
                  <>
                    <PopupConfirmationContainer>
                      <ConfirmationText>
                        Are you sure you want to logout?
                      </ConfirmationText>
                      <div>
                        <CancelBtn onClick={() => close()}>Cancel</CancelBtn>
                        <ConfirmBtn onClick={logoutClick}>Confirm</ConfirmBtn>
                      </div>
                    </PopupConfirmationContainer>
                  </>
                )}
              </Popup>
            </HeaderRightSection>
          </HeaderContainer>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default withRouter(Header)
