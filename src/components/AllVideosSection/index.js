import {Component} from 'react'

import {BsSearch} from 'react-icons/bs'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {
  AllVideosContainer,
  SearchInputElement,
  SearchContainer,
  FailureImage,
  RetryButton,
  LoaderContainer,
  FailureViewContainer,
  Heading,
  EachCardGridContainer,
  NoVideoImage,
  NoVideoContainer,
  NoSearchResultText,
  NoResultDec,
} from './StyledComponent'

import EachVideoCard from '../EachVideoCard'

import SavedContext from '../../contexts/SavedContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class AllVideosSection extends Component {
  state = {
    searchInputValue: '',
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getSearchVideosApi()
  }

  getSearchVideosApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInputValue} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInputValue}`

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const {videos} = data
      console.log(videos)
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: videos,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  searchInputValueChange = event => {
    this.setState({searchInputValue: event.target.value})
  }

  searchClick = () => {
    this.getSearchVideosApi()
  }

  successView = () => {
    const {videosList} = this.state
    if (videosList.length > 0) {
      const updatedData = videosList.map(eachCard => ({
        id: eachCard.id,
        title: eachCard.title,
        thumbnailUrl: eachCard.thumbnail_url,
        channel: {
          name: eachCard.channel.name,
          profileImageUrl: eachCard.channel.profile_image_url,
        },
        viewCount: eachCard.view_count,
        publishedAt: eachCard.published_at,
      }))

      return (
        <EachCardGridContainer>
          {updatedData.map(eachCard => (
            <EachVideoCard eachCard={eachCard} />
          ))}
        </EachCardGridContainer>
      )
    }
    return (
      <NoVideoContainer>
        <NoVideoImage
          alt="no videos"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        />
        <NoSearchResultText>No Search Results Found</NoSearchResultText>
        <NoResultDec>
          Try different keywords or remove the search filter
        </NoResultDec>
      </NoVideoContainer>
    )
  }

  failureView = isLightMode => (
    <FailureViewContainer lightMode={isLightMode}>
      <FailureImage
        src={
          isLightMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        }
      />
      <Heading>Oops! Something Went Wrong </Heading>
      <p>We are having some trouble completing your request.</p>
      <p>Please try again.</p>
      <RetryButton onClick={this.getSearchVideosApi}>Retry</RetryButton>
    </FailureViewContainer>
  )

  inProgressView = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  apiStatusResult = (status, isLightMode) => {
    switch (status) {
      case apiStatusConstants.success:
        return this.successView(isLightMode)
      case apiStatusConstants.failure:
        return this.failureView(isLightMode)
      case apiStatusConstants.inProgress:
        return this.inProgressView(isLightMode)
      default:
        return null
    }
  }

  render() {
    const {apiStatus, searchInputValue} = this.state

    return (
      <SavedContext.Consumer>
        {value => {
          const {isLightMode} = value
          return (
            <AllVideosContainer lightMode={isLightMode}>
              <SearchInputElement
                lightMode={isLightMode}
                onChange={this.searchInputValueChange}
                placeholder="Search"
                type="search"
                value={searchInputValue}
              />
              <SearchContainer
                lightMode={isLightMode}
                onClick={this.searchClick}
              >
                <BsSearch />
              </SearchContainer>
              <div>{this.apiStatusResult(apiStatus, isLightMode)}</div>
            </AllVideosContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default AllVideosSection
