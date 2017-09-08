import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${oc.teal[5]};
    height: 3.5rem;
    color: white;
    font-family: Noto Sans KR;
    font-weight: 200;
    font-size: 1.5rem;
`;

const Header = () => (
    <Wrapper>
        주소록
    </Wrapper>
);

export default Header;
