import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Flex } from './UI';

const MenuItem = styled.div`
  padding: 10px;
`

const Header = () => {
  return (
    <Flex>
      <Link to="/"><MenuItem>Home</MenuItem></Link>
      <Link to="/about"><MenuItem>About</MenuItem></Link>
    </Flex>
  )
}

export default Header;