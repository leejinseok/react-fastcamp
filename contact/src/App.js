import React, { Component } from 'react';
import Header from './components/Header';
import ViewSelector from './components/ViewSelector';
import Container from './components/Container';
import ContactList from './components/ContactList';
import ContactModal from './components/ContactModal';
import FloatingButton from './components/FloatingButton';

import './App.css';
class App extends Component {
    state = {
        view: 'favorite',
        modal: {
            visible: false,
            mode: null
        },
        contacts: [
            {
                id: 'SyKw5cyAl',
                name: '진석',
                phone: '010-1111-2222'
            },
            {
                id: 'r1s_9c10l',
                name: '관석',
                phone: '010-1111-2222'
            }
        ]
    };

    modalHandler = {
        show: (mode, payload) => {
            this.setState({
                modal: {
                    mode,
                    visible: true
                }
            })
        }
    }

    handleFloatingButtonClick = () => {
        const { view } = this.state;
        if (view !== 'list')
            this.setState({view: 'list'});
        this.modalHandler.show(
            'create',{
                name: '',
                phone: ''
            }
        )
    }

    onViewSelect = (view) => {
        this.setState({
            view: view
        });
    }

    render() {
        const {
            view,
            contacts,
            modal
        } = this.state;

        const {
            onViewSelect,
            handleFloatingButtonClick
        } = this;

        return (
            <div className='App'>
                <Header/>
                <ViewSelector
                    onSelect={onViewSelect}
                    selected={view}
                />
                <Container visible={view==='favorite'}>
                    즐겨찾기 컨테이너
                </Container>

                <Container visible={view==='list'}>
                    <ContactList contacts={contacts}/>
                </Container>
                <ContactModal
                   {...modal}
               />
                <FloatingButton onClick={handleFloatingButtonClick}/>
            </div>
        );
    }
}

export default App;
