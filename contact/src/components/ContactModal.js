import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

class ContactModal extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        mode: PropTypes.oneOf(['create', 'modify']),
        name: PropTypes.string,
        phone: PropTypes.string,
    }

    render() {
        const { handleChange } = this;
        const {
            visible,
            mode,
            name,
            phone,
        } = this.props;


        return (
            <Modal visible={visible}>
                <Form>
                    <Input
                        name="name"
                        placeholder="이름"
                        value={name}
                        onChange={handleChange}
                    />
                    <Input
                        name="phone"
                        placeholder="전화번호"
                        value={phone}
                        onChange={handleChange}
                    />
                </Form>
            </Modal>
        );
    }
}

export default ContactModal;
