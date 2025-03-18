import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props =>
    props.lightMode === true ? '#ffffff' : '#212121'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
`
export const HeaderLogo = styled.img`
  height: 35px;
  cursor: pointer;
`

export const HeaderRightSection = styled.div`
  display: flex;
  align-items: center;
`
export const UserLogo = styled.img`
  height: 30px;
  margin-left: 20px;
  margin-right: 20px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border: ${props =>
    props.lightMode === true ? '1px solid #3b82f6' : '1px solid #ffffff'};
  color: ${props => (props.lightMode === true ? '#3b82f6' : '#ffffff')};
  padding: 4px 10px;
  border-radius: 3px;
  cursor: pointer;
`
export const PopupConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px 40px;
  border-radius: 20px;
`
export const ConfirmationText = styled.p`
  color: #00306e;
`
export const CancelBtn = styled.button`
  background-color: transparent;
  color: #7e858e;
  border: 1px solid #7e858e;
  padding: 10px;
  border-radius: 5px;
  margin-right: 20px;
  cursor: pointer;
`

export const ConfirmBtn = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`
