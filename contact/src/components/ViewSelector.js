import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

import StarIcon from 'react-icons/lib/md/star';
import PeopleIcon from 'react-icons/lib/md/people';

const Wrapper = styled.div`
    display: flex;
    height: 4rem;
    position: relative;
`;

const StyledItem  = styled.div`
    height: 100%;
    background: white;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: ${props=> props.active ? oc.gray[9] : oc.gray[6]};
    cursor: pointer;
    font-size: 1.3rem;
    &:hover {
        background: ${oc.gray[0]}
    }
`;

StyledItem.PropTypes = {
    right: PropTypes.bool
}

const Bar = styled.div`
    position: absolute;
    height: 3px;
    bottom: 0px;
    background: ${oc.pink[6]};
    width: 50%;
    transition: ease-in .25s;
    transform: ${props => props.right ? 'translateX(100%)': 'none'};
`;

Bar.PropTypes = {
    right: PropTypes.bool
}

const Item = ({children, selected, name, onSelect}) => (
    <StyledItem
        active={selected === name}
        onClick={()=>onSelect(name)}>
        {children}
    </StyledItem>
);

Item.PropTypes = {
    selected: PropTypes.string,
    name: PropTypes.string,
    onSelect: PropTypes.func
}

const ViewSelector = ({onSelect, selected}) => (
    <Wrapper>
        <Item
            name='favorite'
            selected={selected}
            onSelect={onSelect}>
            <StarIcon />
        </Item>
        <Item
            name='list'
            selected={selected}
            onSelect={onSelect}>
            <PeopleIcon />
        </Item>
        <Bar right={selected === 'list'}/>
    </Wrapper>
);

ViewSelector.PropTypes = {
    onSelect: PropTypes.func,
    selected: PropTypes.string
}

export default ViewSelector;
