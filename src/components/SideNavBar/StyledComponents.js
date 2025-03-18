import styled from 'styled-components'

export const SideBarContainer = styled.div`
  width: 17vw;
  position: fixed;
  top: 55px;
  left: 0;
  bottom: 0;
  background-color: ${props =>
    props.lightMode === true ? '#ffffff' : '#212121'};
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 200;
`
export const EachNavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.lightMode === true ? '#0f0f0f' : '#ffffff')};
`
export const EachNavItemText = styled.p`
  margin-left: 30px;
`
export const ContactIconContainer = styled.div`
  display: flex;
`
export const ContactIcons = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
export const BottomText = styled.p`
  font-size: 16px;
`
export const BottomTextContainer = styled.div`
  color: ${props => (props.lightMode === true ? '#0f0f0f' : '#ffffff')};
`
