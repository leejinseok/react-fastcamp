import React, { Component } from 'react';
import oc from 'open-color';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';

const Wrapper = styled.div`
    position: fixed;
    width: 400px;
    top: ${props=>props.visible ? '50%' : '-9999px'};
    left: 50%;
    z-index: 99999;
    background: white;
    transition: all .4s ease-in-out;
    border: 0;
    box-shadow: 1px 1px 1px 1px ${oc.gray[6]};
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
`;

const WrapperThumbnail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
`;

const WrapperButtons = styled.div`
    display: flex;
`

const Button = styled.button`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${props=> oc[props.color][9]};
    padding: 1rem;
    font-size: 1rem;
    font-family: 'Noto Sans KR';
    font-weight: 200;
    border: 0;
    color: white;
    cursor: pointer;

`

const Form = styled.div`
    /* 레이아웃 */
    /* 색상 */
    background: ${oc.gray[0]};
    padding: 1rem;
`;

const Input = styled.input`
width: 100%;
padding: 0.5rem;
border: 1px solid #e9ecef;
font-size: 1.5rem;
line-height: 2rem;
transition: all .25s;
-webkit-transition: all .25s;
& + & {
    margin-top: .5rem;
}
`

class Modal extends Component {

    render() {
        const {
            visible,
            onCancel,
            onSubmit
        } = this.props;
        return(
            <Wrapper visible={visible}>
                <WrapperThumbnail>
                    <Thumbnail
                        size='7rem'
                        co4lor={oc.red[6]}
                    />
                    </WrapperThumbnail>
                    <Form>
                        <Input
                            name="name"
                            placeholder='이름을 입력해 주세요.'
                        />
                        <Input
                            name="phone"
                            placeholder='전화번호를 입력해 주세요.'
                        />
                    </Form>
                    <WrapperButtons>
                        <Button color='gray'
                            onClick={onCancel}>
                            취소
                        </Button>
                        <Button
                            color='green'
                            onClick={onSubmit}
                        >
                            등록
                        </Button>
                    </WrapperButtons>
            </Wrapper>
        )
    }
}

export default Modal;
