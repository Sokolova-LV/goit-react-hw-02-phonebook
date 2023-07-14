import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Title } from './App.styled.';


export class App extends Component {
  state = {
    contacts: []
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.formSubmitHandler}></ContactForm>

        
      </div>
    )
  }

}

/*<h2>Contacts</h2>
        <Filter></Filter>
        <ContactList></ContactList>*/
