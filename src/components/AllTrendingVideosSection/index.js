import {Component} from 'react'

import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Loader from 'react-loader-spinner'

import {
  LoaderContainer,
  FailureImage,
  FailureViewContainer,
  Heading,
  RetryButton,
} from '../AllVideosSection/StyledComponent'

import {
  TrendingSuccessContainer,
  FireContainer,
  TrendingHeader,
  TrendVideosContainer,
  AllTrendingVideosContainer,
} from './StyledComponent'

import SavedContext from '../../contexts/SavedContext'

import EachTrendCard from '../EachTrendCard'

const apiStatusConstants = {
  initial: 'INITAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class AllTrendingVideosSection extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendVideosList: []}

  componentDidMount() {
    this.getTrendingVideosApi()
  }

  getTrendingVideosApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
      this.setState({
        apiStatus: apiStatusConstants.success,
        trendVideosList: videos,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  successView = () => {
    const {trendVideosList} = this.state
    const updatedTrendVideos = trendVideosList.map(eachTrendVideo => ({
      id: eachTrendVideo.id,
      title: eachTrendVideo.title,
      thumbnailUrl: eachTrendVideo.thumbnail_url,
      channel: {
        name: eachTrendVideo.channel.name,
        profileImageUrl: eachTrendVideo.channel.profile_image_url,
      },
      viewCount: eachTrendVideo.view_count,
      publishedAt: eachTrendVideo.published_at,
    }))
    console.log(updatedTrendVideos)
    return (
      <TrendingSuccessContainer>
        <FireContainer>
          <HiFire fontSize="40px" color="red" />
          <TrendingHeader>Trending</TrendingHeader>
        </FireContainer>
        <TrendVideosContainer>
          {updatedTrendVideos.map(eachTrendCard => (
            <EachTrendCard eachTrendVideo={eachTrendCard} />
          ))}
        </TrendVideosContainer>
      </TrendingSuccessContainer>
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
      <RetryButton onClick={this.getTrendingVideosApi}>Retry</RetryButton>
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

    return (
      <SavedContext.Consumer>
        {value => {
          const {isLightMode} = value
          return (
            <AllTrendingVideosContainer lightMode={isLightMode}>
              {this.apiStatusResult(apiStatus)}
            </AllTrendingVideosContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default AllTrendingVideosSection
