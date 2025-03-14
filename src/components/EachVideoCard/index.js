import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import {Link} from 'react-router-dom'

import {
  ProfileImage,
  ThumbnailImage,
  ProfileMiniDetails,
  ProfileTextDetails,
  ViewsCountText,
  ProfileName,
  ViewCount,
  YearsAgo,
  EachVideoCardContainer,
} from './StyledComponents'

const EachVideoCard = props => {
  const {eachCard} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = eachCard
  const {name, profileImageUrl} = channel
  const yearGap = formatDistanceToNow(new Date(publishedAt)).split(' ')[1]

  return (
    <Link to={`/videos/${id}`} style={{textDecoration: 'none', color: 'black'}}>
      <EachVideoCardContainer>
        <ThumbnailImage src={thumbnailUrl} />
        <ProfileMiniDetails>
          <div>
            <ProfileImage src={profileImageUrl} />
          </div>
          <ProfileTextDetails>
            <p>{title}</p>
            <ProfileName>{name}</ProfileName>
            <ViewsCountText>
              <ViewCount>{`${viewCount} views`}</ViewCount>
              <BsDot style={{marginTop: '0px'}} />
              <YearsAgo>{`${yearGap} years ago`}</YearsAgo>
            </ViewsCountText>
          </ProfileTextDetails>
        </ProfileMiniDetails>
      </EachVideoCardContainer>
    </Link>
  )
}

export default EachVideoCard
