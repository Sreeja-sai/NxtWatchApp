import styled from 'styled-components'

export const AllVideosContainer = styled.div`
  background-color: ${props =>
    props.lightMode === true ? '#f1f5f9' : ' #000000'};
  padding: 20px;
`
export const SearchInputElement = styled.input`
  padding: 11px;
  width: 500px;
  border: ${props =>
    props.lightMode === true ? '1px solid #000000' : '1px solid #f1f5f9'};
  background-color: ${props =>
    props.lightMode === true ? '#f1f5f9' : ' #000000'};
  color: ${props => (props.lightMode === true ? '#000000' : ' #f1f5f9')};
`
export const SearchContainer = styled.button`
  padding: 10px 18px;
  background-color: ${props =>
    props.lightMode === true ? '#f1f5f9' : '#313131'};
`
export const FailureImage = styled.img`
  width: 200px;
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  padding: 10px;
  color: #ffffff;
  boorder-radius: 5px;
  border: none;
  cursor: pointer;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const FailureViewContainer = styled.div`
  text-align: center;
  margin-top: 90px;
  height: 71vh;
  color: ${props => (props.lightMode === true ? '#000000' : ' #f1f5f9')};
`

export const Heading = styled.h1`
  font-size: 20px;
`
export const EachCardGridContainer = styled.div`
  padding: 20px 0px;
  display: grid;
  grid-template-columns: 350px 350px 350px;
  row-gap: 40px;
  column-gap: 20px;
`

export const NoVideoImage = styled.img`
  width: 300px;
  height: 300px;
`

export const NoVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
  font-family: Roboto;
`
export const NoSearchResultText = styled.h1`
  font-size: 20px;
`
export const NoResultDec = styled.p`
  color: #383838;
`
