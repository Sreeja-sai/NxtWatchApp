import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
`
export const HeaderLogo = styled.img`
  height: 35px;
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
  border: 1px solid #3b82f6;
  color: #3b82f6;
  padding: 4px 10px;
  border-radius: 3px;
`
