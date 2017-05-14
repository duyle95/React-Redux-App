import React, { Component } from 'react';
import './App.css';

import AddContact from './components/add_contact';
import ContactList from './components/contact_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>List of participants</h3>
        <AddContact />
        <ContactList />
      </div>
    );
  }
}

export default App;
