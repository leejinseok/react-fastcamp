import React, { Component } from 'react';
import Header from './components/Header';
import ViewSelector from './components/ViewSelector';
import ContactList from './components/ContactList';
import FloatingButton from './components/FloatingButton';
import Modal from './components/Modal';
import Dimmer from './components/Dimmer';
import './App.css';

class App extends Component {
    state = {
        view: 'list',
        contacts: [
            {
                id: 'wwLstjR',
                name: '진석',
                phone: '010-2222-3333'
            },
            {
                id: 'rhkStJr',
                name: '관석',
                phone: '010-3333-4444'
            }
        ],
        modal: {
            visible: false
        }
    };

    onClickViewSelector = (name) => {
        this.setState({
            view: name
        });
    }

    handleFloatingButtonClick = () => {
        this.modalHandler.show();
    }

    handleDimmerClick = () => {
        this.modalHandler.hide();
    }

    handleModalCancelClick = () => {
        this.modalHandler.hide();
    }

    handleModalSubmitClick = () => {
        this.modalHandler.hide();
    }

    modalHandler = {
        show: () => {
            this.setState({
                modal:{
                    visible: true
                }
            })
        },
        hide: () => {
            this.setState({
                modal: {
                    visible: false
                }
            })
        }
    }

    render() {
        const {
            view,
            contacts,
            modal
        } = this.state;
        const {
            onClickViewSelector,
            modalHandler,
            handleFloatingButtonClick,
            handleDimmerClick,
            handleModalCancelClick,
            handleModalSubmitClick
        } = this;

        return (
            <div className="App">
                <Header />
                <ViewSelector
                    selected={view}
                    onSelect={onClickViewSelector}
                />
                <ContactList
                    visible={view==='list'}
                    contacts={contacts}
                />
                <FloatingButton onClick={handleFloatingButtonClick}/>
                <Modal
                    visible={modal.visible}
                    onCancel={handleModalCancelClick}
                    onSubmit={handleModalSubmitClick}
                />
                <Dimmer
                    visible={modal.visible}
                    onClick={handleDimmerClick}
                />
            </div>
        );
    }
}

export default App;
