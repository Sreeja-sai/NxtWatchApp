import styled from 'styled-components'

export const VideoDetailContainer = styled.div`
  padding: 5px 40px;
  height: 94vh;
`

export const ViewsActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`

export const LikeDisLikeSavActionContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ViewsYearContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LikeContainer = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => {
    if (props.exists) return 'blue'
    if (props.lightMode) return 'black'
    return 'white'
  }};
`
export const DislikeContainer = styled(LikeContainer)``

export const SaveContainer = styled(LikeContainer)`
  cursor: pointer;
  color: ${props => {
    if (props.exists) return 'blue'
    if (props.lightMode) return 'black'
    return 'white'
  }};
`

export const ProfilePageContainer = styled.div`
  display: flex;
`
export const ProfileText = styled.div`
  margin: 0px 20px;
`

export const SubscriberCountText = styled.p`
  font-size: 14px;
  color: #313131;
`
export const Descriptiontext = styled.p`
  font-size: 14px;
`
