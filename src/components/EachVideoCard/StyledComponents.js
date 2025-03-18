import styled from 'styled-components'

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-top: 20px;
`
export const ThumbnailImage = styled.img`
  width: 350px;
  height: 190px;
`
export const ProfileMiniDetails = styled.div`
  display: flex;
  width: 300px;
`
export const ProfileTextDetails = styled.div`
  margin-left: 10px;
`
export const ViewsCountText = styled.div`
  display: flex;
  align-items: flex-start;
`
export const ProfileName = styled.p`
  color: #231f20;
  margin-top: 0px;
  font-size: 14px;
`
export const YearsAgo = styled.p`
  margin-top: 0px;
  font-size: 12px;
`

export const ViewCount = styled(YearsAgo)``

export const EachVideoCardContainer = styled.div`
  color: ${props => (props.lightMode === true ? '#000000' : '#ffffff')};
`
