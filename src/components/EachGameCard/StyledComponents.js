import styled from 'styled-components'

export const GamingImage = styled.img`
  width: 260px;
  height: 380px;
`
export const GameTitle = styled.p`
  font-weight: bold;
  margin-bottom: 0px;
`
export const GameViewContainer = styled.p`
  margin-top: 0px;
`
export const EachGameCardTextContainer = styled.div`
  color: ${props => (props.lightMode === true ? '#000000' : '#ffffff')};
`
