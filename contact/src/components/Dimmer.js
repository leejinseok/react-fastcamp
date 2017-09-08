import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
position: absolute;
width: 100%;
height: 100%;
background:rgba(0,0,0,.3);
z-index: 999;
top: 0;
left: 0;
display: ${props=> props.visible ? 'block' : 'none'}
`;

const Dimmer = ({visible, onClick}) => {
    return(
        <Wrapper visible={visible} onClick={onClick}>

        </Wrapper>
    )
}

export default Dimmer;
