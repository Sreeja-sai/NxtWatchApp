import {Link} from 'react-router-dom'

import {
  GamingImage,
  GameTitle,
  GameViewContainer,
  EachGameCardTextContainer,
} from './StyledComponents'

import SavedContext from '../../contexts/SavedContext'

const EachGameCard = props => {
  const {eachGameCard} = props

  const {id, title, thumbnailUrl, viewCount} = eachGameCard
  return (
    <SavedContext.Consumer>
      {value => {
        const {isLightMode} = value
        return (
          <Link
            to={`/videos/${id}`}
            style={{textDecoration: 'none', color: 'black'}}
          >
            <EachGameCardTextContainer lightMode={isLightMode}>
              <GamingImage src={thumbnailUrl} />
              <GameTitle>{title}</GameTitle>
              <GameViewContainer>{`${viewCount} Watching Worldwide`}</GameViewContainer>
            </EachGameCardTextContainer>
          </Link>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default EachGameCard
