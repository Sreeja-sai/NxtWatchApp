import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginCardContainer = styled.div`
  width: 450px;
  height: 400px;
  box-shadow: 0 0 15px 5px lightgray;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  padding: 40px;
`
export const LoginLogo = styled.img`
  width: 150px;
`
export const LoginLogoContainer = styled.div`
  text-align: center;
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
export const UserLabel = styled.label`
  color: #1e293b;
  font-size: 13px;
  font-weight: 500;
`
export const UserInput = styled.input`
  margin-top: 3px;
  padding: 9px;
  width: 370px;
  border: 2px solid #e2e8f0;
  border-radius: 3px;OQ
  outline: none;
`
export const PasswordContainer = styled(UserContainer)``

export const PasswordLabel = styled(UserLabel)``

export const PasswordInput = styled(UserInput)``

export const ShowPasswordContainer = styled.div`
  margin: 20px 0px;
  display: flex;
  align-items: center;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
`
export const LoginTextPara = styled.p`
  color: #ff0b37;
  font-size: 12px;
`
