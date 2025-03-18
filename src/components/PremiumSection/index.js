import {IoIosClose} from 'react-icons/io'

import {
  PremiumSectionContainer,
  CloseContainer,
  PremiumIcon,
  GetitButton,
} from './StyledComponents'

const PremiumSection = () => (
  <PremiumSectionContainer id="premium">
    <CloseContainer>
      <IoIosClose
        onClick={() => {
          document.getElementById('premium').style.display = 'none'
        }}
        fontSize="30px"
        color="red"
      />
    </CloseContainer>
    <>
      <PremiumIcon src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
      <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
      <GetitButton>GET IT NOW</GetitButton>
    </>
  </PremiumSectionContainer>
)

export default PremiumSection
