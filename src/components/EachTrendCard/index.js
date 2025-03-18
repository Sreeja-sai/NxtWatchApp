import {formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'

import {BsDot} from 'react-icons/bs'

import SavedContext from '../../contexts/SavedContext'

import {
  EachTrendCardContainer,
  ThumbnailImage,
  ViewsContainer,
  Trendtext,
} from './StyledComponent'

import {Heading} from '../AllVideosSection/StyledComponent'

import {ViewCount, YearsAgo} from '../EachVideoCard/StyledComponents'

const EachTrendCard = props => {
  const {eachTrendVideo} = props
  const {
    id,
    title,
    channel,
    thumbnailUrl,
    viewCount,
    publishedAt,
  } = eachTrendVideo
  const yearsAgo = formatDistanceToNow(new Date(publishedAt)).split(' ')[1]
  const {name} = channel
  return (
    <SavedContext.Consumer>
      {value => {
        const {isLightMode} = value
        return (
          <Link
            to={`/videos/${id}`}
            style={{textDecoration: 'none', color: 'black'}}
          >
            <EachTrendCardContainer lightMode={isLightMode}>
              <div>
                <ThumbnailImage src={thumbnailUrl} />
              </div>
              <Trendtext>
                <Heading>{title}</Heading>
                <p>{name}</p>
                <ViewsContainer>
                  <ViewCount>{`${viewCount} views`}</ViewCount>
                  <BsDot />
                  <YearsAgo>{`${yearsAgo} years ago`}</YearsAgo>
                </ViewsContainer>
              </Trendtext>
            </EachTrendCardContainer>
          </Link>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default EachTrendCard
