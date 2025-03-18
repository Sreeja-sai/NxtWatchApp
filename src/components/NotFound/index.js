import {NotFoundImage, NotFoundContainer} from './StyledComponents'

import {Heading} from '../AllVideosSection/StyledComponent'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      alt="not found"
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
    />
    <Heading>Page Not Found</Heading>
    <p>We are sorry, the page you requested could not found.</p>
  </NotFoundContainer>
)

export default NotFound
