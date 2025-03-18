import styled from 'styled-components'

export const NoSavedVideos = styled.img`
  width: 500px;
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 93vh;
  width: 83vw;
  color: ${props => (props.lightMode === true ? '#000000' : ' #f1f5f9')};
  background-color: ${props =>
    props.lightMode === true ? '#f1f5f9' : ' #000000'};
`

export const SavedVideosContainer = styled.div`
  padding: 10px 30px;
  font-family: Roboto;
`

export const SavedHeader = styled.h1`
  margin-left: 50px;
`

export const PlayListContainer = styled.div`
  display: flex;
  align-items: center;
`
export const AllSavedVideosContainer = styled.div``
