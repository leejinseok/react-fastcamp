import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Thumbnail from './Thumbnail';

const Wrapper = styled.div`
/* 레이아웃 */
  padding: 1rem;
  position: relative;
  overflow: hidden;
  display: flex;
  /* 색상 */
  background: ${oc.gray[0]};
  border: 1px solid ${oc.gray[2]};
  /* 애니메이션 */
  transition: all .25s;
  /* 사이 간격 */
  & + & {
      margin-top: 1rem;
  }

  /* 커서가 위에 있으면 */
  &:hover {
      border: 1px solid ${oc.gray[4]};
      background: white;
  }
`

const ContactItem = ({name, phone}) => (
    <Wrapper>
        <p>{name} <b>{phone}</b></p>
    </Wrapper>
)

export default ContactItem;
