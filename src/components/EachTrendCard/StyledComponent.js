import styled from 'styled-components'

export const EachTrendCardContainer = styled.div`
  display: flex;
  margin-top: 50px;
  color: ${props => (props.lightMode === true ? '#000000' : '#ffffff')};
`
export const ThumbnailImage = styled.img`
  width: 400px;
  height: 200px;
`
export const ViewsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const Trendtext = styled.div`
  margin-left: 20px;
`
