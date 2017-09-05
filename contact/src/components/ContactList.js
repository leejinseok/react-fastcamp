import React, { Component } from 'react';
import oc from 'open-color';
import styled from 'styled-components';
import ContactItem from './ContactItem';

import Person from 'react-icons/lib/md/person';

const Wrapper = styled.div`
    width: 700px;
    margin-top: 1rem;
`;

class ContactList extends Component {
    render(){
        const {
            contacts
        } = this.props;

        const contactsList = contacts.map((item) =>
            <ContactItem
                key={item.id}
                name={item.name}
                phone={item.phone}
            />
        );

        return(
            <Wrapper>
                {contactsList}
            </Wrapper>
        )
    }
}

export default ContactList;
