import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Person from 'react-icons/lib/md/person';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: ${props=> props.size};
  height: ${props=> props.size};
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: calc(${props=> props.size} * 0.5);
  font-size: calc(${props=> props.size} * 0.75);

  background-color: ${props=>props.color};
  color: white;
`;

Wrapper.PropTypes = {
  size: PropTypes.string,
  color: PropTypes.string
};

const Thumbnail = ({size, color}) => (
  <Wrapper size={size} color={color}>
    <Person />
  </Wrapper>
);

export default Thumbnail;
