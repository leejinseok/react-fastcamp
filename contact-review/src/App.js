import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import ViewSelector from './components/ViewSelector';
import FavoriteList from './components/FavoriteList';

class App extends Component {
  state = {
    view: 'favorite',
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

  handleSelectView = (view) => {
    this.setState({view});
  }

  render(){
    const { view, contacts } = this.state;
    const { handleSelectView } = this;

    return(
      <div>
        <Header />
        <ViewSelector
          onSelect={handleSelectView}
          selected={view}
          />
        <Container
          visible={view==='favorite'}
          selected={view}>
          <FavoriteList contacts={contacts}/>
        </Container>
        <Container visible={view==='list'} />
      </div>
    )
  }
}

export default App;
