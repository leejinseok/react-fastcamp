import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${oc.blue[4]};
    color: white;
`;

const Header = () => (
    <Wrapper>
        주소록
    </Wrapper>
);

export default Header;
