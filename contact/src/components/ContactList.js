import React from 'react';
import oc from 'open-color';
import styled from 'styled-components';
import Person from 'react-icons/lib/md/person';

const Wrapper = styled.div`
    width: 700px;
    margin:0 auto;
    padding: 1rem;
    display: ${props=> props.visible ? 'block': 'none'};
`;

const WrapperListItem = styled.div`
    display: flex;
    align-items: center;
`;

const WrapperItem = styled.div`
    display: flex;
    padding: 1.3rem;
    background: white;
    border: 1px solid ${oc.gray[2]};
    & + & {
        margin-top: 1rem;
    }
`;

const Info = styled.div`
    display: flex;
    flex: 8;
`;

const WrapperSetting = styled.div`
    display: flex;
    flex: 2;
    justify-content: flex-end;
`

const Setting = () => {
    const btnStyle = {
        borderRadius: '1rem',
        background: oc.gray[4],
        border: "1px solid " + oc.gray[4],
        marginLeft: '.5rem'
    };

    return(
        <WrapperSetting>
            <button style={btnStyle}>수정</button>
            <button style={btnStyle}>삭제</button>
        </WrapperSetting>
    );
}

const Item = ({children}) => {
    return(
        <WrapperItem>
            <Info>
                {children}
            </Info>
            <Setting />
        </WrapperItem>
    )
};

const ContactList = ({visible, contacts}) => (
    <Wrapper visible={visible}>
        {
            contacts.map((contact) => (
                <Item
                    key={contact.id}
                    contact={contact}
                >
                    {contact.name}, {contact.phone}
                </Item>
            ))
        }
    </Wrapper>
);

export default ContactList;
