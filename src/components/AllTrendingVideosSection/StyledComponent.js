import styled from 'styled-components'

export const TrendingSuccessContainer = styled.div`
  padding: 10px 30px;
  font-family: Roboto;
`

export const TrendingHeader = styled.h1`
  margin-left: 50px;
`

export const FireContainer = styled.div`
  display: flex;
  align-items: center;
`
export const TrendVideosContainer = styled.div``

export const AllTrendingVideosContainer = styled.div`
  background-color: ${props =>
    props.lightMode === true ? '#f1f5f9' : ' #000000'};
  color: ${props => (props.lightMode === true ? '#000000' : ' #f1f5f9')};
`
