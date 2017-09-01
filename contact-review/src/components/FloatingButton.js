import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';
import AddIcon from 'react-icons/lib/md/add';

const Wrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  width: 4rem;
  height: 4rem;
  border-radius: 4rem;

  background-color: white;
  border: 1px solid ${oc.pink[6]};
  color: ${oc.pink[6]};

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all .15s;
  &:hover {
    transform: translateY(-.5rem);
    color: white;
    background-color: ${oc.pink[6]};
  }

  &:active {
    background-color: ${oc.pink[7]};
  }
`;

const FloatingButton = ({onClick}) => (
  <Wrapper onClick={onClick}>
    <AddIcon />
  </Wrapper>
)

export default FloatingButton;
