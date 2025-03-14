import {Link} from 'react-router-dom'

import {GamingImage, GameTitle, GameViewContainer} from './StyledComponents'

const EachGameCard = props => {
  const {eachGameCard} = props

  const {id, title, thumbnailUrl, viewCount} = eachGameCard
  return (
    <Link to={`/videos/${id}`} style={{textDecoration: 'none', color: 'black'}}>
      <div>
        <GamingImage src={thumbnailUrl} />
        <GameTitle>{title}</GameTitle>
        <GameViewContainer>{`${viewCount} Watching Worldwide`}</GameViewContainer>
      </div>
    </Link>
  )
}

export default EachGameCard
