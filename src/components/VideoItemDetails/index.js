import {Component} from 'react'

import Cookies from 'js-cookie'

import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import {BiLike, BiDislike} from 'react-icons/bi'

import {CgPlayListAdd} from 'react-icons/cg'

import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player/lazy'

// Lazy load the YouTube player

import Header from '../Header'

import SideNavBar from '../SideNavBar'

import {
  HomeContainer,
  MainSectionContainer,
  AppMainContainer,
} from '../Home/StyledComponent'

import {
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  Heading,
  RetryButton,
} from '../AllVideosSection/StyledComponent'

import {ProfileImage} from '../EachVideoCard/StyledComponents'

import {
  VideoDetailContainer,
  ViewsActions,
  ViewsYearContainer,
  LikeDisLikeSavActionContainer,
  LikeContainer,
  DislikeContainer,
  SaveContainer,
  ProfilePageContainer,
  ProfileText,
  SubscriberCountText,
  Descriptiontext,
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class EachVideoDetails extends Component {
  state = {apiStatus: apiStatusConstants.initial, individualVideoData: {}}

  componentDidMount() {
    this.getEachVideoDetails()
  }

  getEachVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      const videoDetails = data.video_details
      const updatedData = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
      }

      this.setState({
        apiStatus: apiStatusConstants.success,
        individualVideoData: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  saveItemClick = () => {}

  successView = () => {
    const {individualVideoData} = this.state
    const {
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = individualVideoData
    const {name, profileImageUrl, subscriberCount} = channel
    const yearsAgo = formatDistanceToNow(new Date(publishedAt)).split(' ')[1]

    return (
      <VideoDetailContainer>
        <ReactPlayer width="100%" height="50vh" url={videoUrl} />
        <p>{title}</p>
        <ViewsActions>
          <ViewsYearContainer>
            <p>{`${viewCount} views`}</p>
            <BsDot />
            <p>{`${yearsAgo} years ago`}</p>
          </ViewsYearContainer>
          <LikeDisLikeSavActionContainer>
            <LikeContainer>
              <BiLike fontSize="18px" marginTop="0px" />
              <p>Like</p>
            </LikeContainer>
            <DislikeContainer>
              <BiDislike fontSize="18px" />
              <p>Dislike</p>
            </DislikeContainer>
            <SaveContainer onClick={this.saveItemClick}>
              <CgPlayListAdd fontSize="18px" />
              <p>Save</p>
            </SaveContainer>
          </LikeDisLikeSavActionContainer>
        </ViewsActions>
        <hr />
        <ProfilePageContainer>
          <ProfileImage src={profileImageUrl} />
          <ProfileText>
            <p>{name}</p>
            <SubscriberCountText>{`${subscriberCount} subscribers`}</SubscriberCountText>
            <Descriptiontext>{description}</Descriptiontext>
          </ProfileText>
        </ProfilePageContainer>
      </VideoDetailContainer>
    )
  }

  failureView = () => (
    <FailureViewContainer>
      <FailureImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
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

  apiStatusResult = status => {
    switch (status) {
      case apiStatusConstants.success:
        return this.successView()
      case apiStatusConstants.failure:
        return this.failureView()
      case apiStatusConstants.inProgress:
        return this.inProgressView()
      default:
        return null
    }
  }

  render() {
    const {apiStatus} = this.state
    return (
      <HomeContainer>
        <Header />
        <MainSectionContainer>
          <SideNavBar />
          <AppMainContainer>{this.apiStatusResult(apiStatus)}</AppMainContainer>
        </MainSectionContainer>
      </HomeContainer>
    )
  }
}

export default EachVideoDetails
