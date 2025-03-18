import {formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'

import {BsDot} from 'react-icons/bs'

import {
  EachSavedCardContainer,
  ThumbnailImage,
  ViewsContainer,
  Trendtext,
} from './StyledComponents'

import {Heading} from '../AllVideosSection/StyledComponent'

import {ViewCount, YearsAgo} from '../EachVideoCard/StyledComponents'

import SavedContext from '../../contexts/SavedContext'

const EachSavedCard = props => {
  const {saveVideo} = props
  const {id, title, channel, thumbnailUrl, viewCount, publishedAt} = saveVideo
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
            <EachSavedCardContainer lightMode={isLightMode}>
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
            </EachSavedCardContainer>
          </Link>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default EachSavedCard
