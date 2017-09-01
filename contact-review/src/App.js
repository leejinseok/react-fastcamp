import React, { Component } from 'react';
import oc from 'open-color';
import Header from './components/Header';
import Container from './components/Container';
import ViewSelector from './components/ViewSelector';
import FavoriteList from './components/FavoriteList';
import FloatingButton from './components/FloatingButton';
import ContactModal from './components/ContactModal';
import Modal from './components/Modal';
import Dimmer from './components/Dimmer';

function generateRandomColor () {
  const colors = [
    'gray',
    'red',
    'pink',
    'grape',
    'violet',
    'indigo',
    'blue',
    'cyan',
    'teal',
    'green',
    'lime',
    'yellow',
    'orange'
  ];
  const random = Math.floor(Math.random() * 13);
  return oc[colors[random]][6];
};

class App extends Component {
  state = {
    view: 'favorite',
    modal: {
      visible: false,
      mode: null
    },
    contacts: [
      {
        "id": "SyKw5cyAl",
        "name": "이진석",
        "phone": "010-0000-0000",
        "color": "#40c057",
        "favorite": true
      }
    ]
  };

  // 모달 관련 메소드들
  modalHandler = {
    show: (mode, payload) => {
      this.setState({
        modal: {
          mode,
          visible: true,
          ...payload // payload 안의 값을 풀어서 여기에 넣음
        }
      })
    },
    hide: () => {
      this.setState({
        modal: {
          ...this.state.modal, // 기존 값들을 복사해서 안에 넣음
          visible: false
        }
      })
    },
    // 추후 구현될 메소드들
    change: null,
    action: {
      create: null,
      modify: null,
      remove: null
    }
  }

  handleSelectView = (view) => {
    this.setState({view});
  }

  handleFloatingButtonClick = () => {
    // 현재 view 가 list 가 아니면 list 로 설정
    const { view } = this.state;
    if(view !== 'list')
    this.setState({view: 'list'});

    // Contact 추가 모달 띄우기
    this.modalHandler.show(
      'create',
      {
        name: '',
        phone: '',
        color: generateRandomColor()
      }
    );
  }

  render(){
    const {
      handleSelectView,
      handleFloatingButtonClick,
      modalHandler
    } = this;
    const { view, contacts, modal } = this.state;
    return(
      <div>
        <Header />
        <ViewSelector
          onSelect={handleSelectView}
          selected={view} />

        <Container
          visible={view === 'favorite'}
          selected={view}>
          <FavoriteList contacts={contacts}/>
        </Container>

        <Container visible={view === 'list'}>
          <h2>리스트</h2>
        </Container>

        <Dimmer visible={modal.visible} />
        <ContactModal {...modal} onHide={modalHandler.hide}/>
        <FloatingButton onClick={handleFloatingButtonClick} />
      </div>
    )
  }
}

export default App;
