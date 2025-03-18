import {Component} from 'react'

import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import Loader from 'react-loader-spinner'

import {
  LoaderContainer,
  FailureImage,
  FailureViewContainer,
  Heading,
  RetryButton,
} from '../AllVideosSection/StyledComponent'

import {
  GamingSuccessContainer,
  GameContainer,
  GamingHeader,
  EachGameCardContainer,
} from './StyledComponent'

import EachGameCard from '../EachGameCard'

const apiStatusConstants = {
  initial: 'INITAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class AllGamingVideosSection extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingVideosList: []}

  componentDidMount() {
    this.getGamingVideosApi()
  }

  getGamingVideosApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const {videos} = data
      console.log(videos)
      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingVideosList: videos,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  successView = () => {
    const {gamingVideosList} = this.state
    const updatedGamingVideos = gamingVideosList.map(eachGameVideo => ({
      id: eachGameVideo.id,
      title: eachGameVideo.title,
      thumbnailUrl: eachGameVideo.thumbnail_url,
      viewCount: eachGameVideo.view_count,
    }))

    return (
      <GamingSuccessContainer>
        <GameContainer>
          <SiYoutubegaming fontSize="40px" color="red" />
          <GamingHeader>Gaming</GamingHeader>
        </GameContainer>
        <EachGameCardContainer>
          {updatedGamingVideos.map(eachGameCard => (
            <EachGameCard eachGameCard={eachGameCard} />
          ))}
        </EachGameCardContainer>
      </GamingSuccessContainer>
    )
  }

  inProgressView = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  failureView = () => (
    <FailureViewContainer>
      <FailureImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
      <Heading>Oops! Something Went Wrong </Heading>
      <p>We are having some trouble completing your request.</p>
      <p>Please try again.</p>
      <RetryButton onClick={this.getGamingVideosApi}>Retry</RetryButton>
    </FailureViewContainer>
  )

  apiStatusResult = apiStatus => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.successView()
      case apiStatusConstants.inProgress:
        return this.inProgressView()
      case apiStatusConstants.failure:
        return this.failureView()
      default:
        return null
    }
  }

  render() {
    const {apiStatus} = this.state

    return <div>{this.apiStatusResult(apiStatus)}</div>
  }
}

export default AllGamingVideosSection
