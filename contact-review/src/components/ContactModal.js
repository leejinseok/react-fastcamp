import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Modal from './Modal';
import Thumbnail from './Thumbnail';
import Input from './Input';
import PropTypes from 'prop-types';


const ThumbnailWrapper = styled.div`
padding-top: 3rem;
padding-bottom: 3rem;
display: flex;
justify-content: center;

background-color: white;
`;

const Form = styled.div`
padding: 1rem;
background-color: ${oc.gray[0]};
`;

const ButtonsWrapper = styled.div`
display: flex;
`;

const Button = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex: 1;
  display: inline-block;

  cursor: pointer;
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;
  transition: all .3s;

  color: white;
  background: ${props=> oc[props.color][7]};

  &:hover {
    background-color: ${props=> oc[props.color][6]};
  }

  &:active {
    background-color: ${props=> oc[props.color[8]]};
  }
`;

Button.PropTypes = {
  color: PropTypes.string
};

class ContactModal extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    // 모달의 모드
    mode: PropTypes.oneOf(['create', 'modify']),
    // 모달에 들어갈 데이터 값
    name: PropTypes.string,
    phone: PropTypes.string,
    color: PropTypes.string,
    onHide: PropTypes.func,
    onAction: PropTypes.func, // 추가 혹은 수정
    onRemove: PropTypes.func // 나중에 구현할 삭제
  }

  render() {
    const {
      visible,
      onHide,
      color,
      mode
    } = this.props;

    return (
      <Modal visible={visible} onHide={onHide}>
        <ThumbnailWrapper>
          <Thumbnail size="8rem" color={color}/>
        </ThumbnailWrapper>
        <Form>
          <Input
            name="name"
            placeholder="이름"/>
          <Input
            name="phone"
            placeholder="전화번호"/>
        </Form>
        <ButtonsWrapper>
          <Button color='teal'>
            { mode === 'create' ? '추가' : '수정' }
          </Button>
          <Button color='gray'>
            취소
          </Button>
        </ButtonsWrapper>
      </Modal>
    );
  }
}
export default ContactModal;
