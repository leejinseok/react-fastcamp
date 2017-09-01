import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';
import AddIcon from 'react-icons/lib/md/add';

const Wrapper = styled.div `
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 4rem;
  height: 4rem;

  background: white;
  border: 3px solid ${oc.pink[6]};
  color: ${oc.pink[6]};

  border-radius: 4rem;
  font-size: 2rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all .15s;

  &:hover {
    transform: translatey(-.5rem);
    color: white;
    background-color: ${oc.pink[6]};
  }
  &:active {
    background-color: ${oc.pink[7]};
  }
`

const FloatingButton = ({onClick}) => (
  <Wrapper onClick={onClick}>
    <AddIcon />
  </Wrapper>
);

FloatingButton.PropTypes = {
  onClick: PropTypes.func
};

export default FloatingButton;
