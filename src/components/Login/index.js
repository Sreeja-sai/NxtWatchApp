import {Component} from 'react'

import Cookies from 'js-cookie'

import {
  LoginContainer,
  LoginCardContainer,
  LoginLogo,
  LoginLogoContainer,
  UserContainer,
  UserLabel,
  UserInput,
  PasswordContainer,
  PasswordLabel,
  PasswordInput,
  ShowPasswordContainer,
  LoginButton,
  LoginTextPara,
} from './StyledComponents'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showPasswordCheck: false,
    loginResultText: '',
  }

  componentDidMount() {
    const {history} = this.props
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      history.replace('/')
    }
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  showPassword = event => {
    this.setState({showPasswordCheck: event.target.checked})
  }

  getHomePageData = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  loginButtonClick = async () => {
    const {username, password} = this.state
    const userCredential = {
      username,
      password,
    }
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userCredential),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      this.getHomePageData(data.jwt_token)
    } else {
      this.setState({loginResultText: data.error_msg})
    }
  }

  render() {
    const {showPasswordCheck, loginResultText} = this.state

    return (
      <LoginContainer>
        <LoginCardContainer>
          <LoginLogoContainer>
            <LoginLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
          </LoginLogoContainer>
          <UserContainer>
            <div>
              <UserLabel htmlFor="username">USERNAME</UserLabel>
            </div>
            <div>
              <UserInput
                onChange={this.changeUsername}
                id="username"
                type="text"
              />
            </div>
          </UserContainer>
          <PasswordContainer>
            <div>
              <PasswordLabel htmlFor="password">PASSWORD</PasswordLabel>
            </div>
            <div>
              <PasswordInput
                onChange={this.changePassword}
                id="password"
                type={`${showPasswordCheck === true ? 'text' : 'password'}`}
              />
            </div>
          </PasswordContainer>
          <ShowPasswordContainer>
            <input
              id="showpassword"
              onClick={this.showPassword}
              type="checkbox"
            />
            <label htmlFor="showpassword">Show Password</label>
          </ShowPasswordContainer>
          <LoginButton onClick={this.loginButtonClick}>Login</LoginButton>
          <LoginTextPara>{loginResultText}</LoginTextPara>
        </LoginCardContainer>
      </LoginContainer>
    )
  }
}

export default LoginRoute
