import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import StarIcon from 'react-icons/lib/md/star';
import PeopleIcon from 'react-icons/lib/md/people';

const Wrapper = styled.div`
  height: 4rem;
  background-color: white;
  width: 100%;
  display: flex;
  position: relative;
`;

const StyledItem = styled.div`
  /* 레이아웃 */
  height: 100%;

  /* 형제 엘리먼트들과 동일한 사이즈 */
  flex: 1;

  /* 가운데 정렬 */
  display: flex;
  align-items: center;
  justify-content: center;

  /* 색상 */
  color: ${oc.gray[6]};

  /* 기타 */
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    background-color: ${oc.gray[0]};
  }
`;

const Bar = styled.div`
  position: absolute;
  bottom: 0px;
  height: 3px;
  width: 50%;
  background-color: ${oc.pink[6]};
  /* 애니메이션 */
  transition: ease-in .25s;
  transform: ${props => props.right ? 'translateX(100%)' : 'none'};
`

const Item = ({children, selected, onSelect, name}) => (
  <StyledItem
    onClick={()=>onSelect(name)}
    active={name === selected}>
    {children}
  </StyledItem>
);

const ViewSelector = ({selected, onSelect}) => (
  <Wrapper>
    <Item
      name='favorite'
      onSelect={onSelect}>
      <StarIcon />
    </Item>
    <Item
      name='list'
      onSelect={onSelect}>
      <PeopleIcon />
    </Item>
    <Bar right={selected === 'list'}/>
  </Wrapper>
)

export default ViewSelector;