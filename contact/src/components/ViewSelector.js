import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import StarIcon from 'react-icons/lib/md/star';
import PeopleIcon from 'react-icons/lib/md/people';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    background: white;
    box-shadow: 1px 1px 1px 1px ${oc.gray[3]};
`;

const Li = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    color: ${props=> props.active ? oc.gray[9] : oc.gray[6]};
    cursor: pointer;
    font-size: 1.4rem;
    transition: background .2s ease-in-out;
    &:hover {
        background: ${oc.gray[0]};
    }
`;

const Bar = styled.div`
    position: absolute;
    bottom: 0px;
    height: 3px;
    width: 50%;
    background-color: ${oc.pink[6]};
    transition: all .2s ease-in-out;
    transform: ${props=> props.right ? 'translateX(100%)' : 'none'}
`;

const ViewSelector = ({selected, onSelect}) => (
    <Wrapper>
        <Li
            active={selected==='favorite'}
            onClick={()=>onSelect('favorite')}
        >
            <StarIcon />
        </Li>
        <Li
            active={selected==='list'}
            onClick={()=>onSelect('list')}
        >
            <PeopleIcon />
        </Li>
        <Bar right={selected === 'list'}/>
    </Wrapper>
);

export default ViewSelector;
