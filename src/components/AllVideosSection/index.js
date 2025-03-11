import {BsSearch} from 'react-icons/bs'

import {
  AllVideosContainer,
  SearchInputElement,
  SearchContainer,
} from './StyledComponent'

const AllVideosSection = () => (
  <AllVideosContainer>
    <SearchInputElement placeholder="Search" type="search" />
    <SearchContainer>
      <BsSearch />
    </SearchContainer>
  </AllVideosContainer>
)

export default AllVideosSection
