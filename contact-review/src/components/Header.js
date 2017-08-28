import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
  height: 5rem;
  background: ${oc.blue[4]};
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  width: 100%;
  display: flex;
  align-items: center; /* 세로정렬 */
  justify-content: center /* 가로 정렬 */
`;

const Header = () => (
  <Wrapper>
    주소록
  </Wrapper>
)

export default Header;
