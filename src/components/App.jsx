import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Title, Article } from './App.styled.';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      ...data,
    };

    contacts.some(({ name }) => name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
  };

  deleteContact = userId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== userId),
    }));
  };

  handleChangeFilter = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };

  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const LowerCase = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(LowerCase)
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <div>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact}></ContactForm>

        <Article>Contacts</Article>
        <Filter value={filter} handleChangeFilter={this.handleChangeFilter}></Filter>
        
        <ContactList>
          contacts={this.getFilterContacts()}
          deleteContact={this.deleteContact}
        </ContactList>
      </div>
    )
  }

}

/*<h2>Contacts</h2>
        <Filter></Filter>
        <ContactList></ContactList>*/
