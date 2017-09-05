import React from 'react';
import oc from 'open-color';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 700px;
    margin: 0 auto; /* 가운데 정렬 */
    padding: 1rem;
    /* 모바일 크기 */

`;

const Container = ({visible, children}) => (
    visible ? <Wrapper>{children}</Wrapper> : null
);

export default Container;
