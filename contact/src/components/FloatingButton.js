import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import AddIcon from 'react-icons/lib/md/add';

const Wrapper = styled.div`
    position: fixed;
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;

    background: white;
    border: 1px solid ${oc.pink[6]};
`

const FloatingButton = () => (
    <Wrapper>
        <AddIcon />
    </Wrapper>
)

export default FloatingButton;
