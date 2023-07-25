import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Title, Article } from './App.styled.';

export class App extends Component {
  state = {
    contacts: [
      /*{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },*/
    ],
    filter: '',
  };

  addContact = data => {
    const contact = {
      id: nanoid(),
      ...data,
      deleteContact: true,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  }

  /*addContact = data => {
    const contact = {
      id: nanoid(),
      data,
      deleteContact: false,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };*/

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
      name.toLowerCase().includes(LowerCase)
    );
  };

  render() {
    const { filter } = this.state;

    console.log(this.props.contacts);

    return (
      <div>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />

        <Article>Contacts</Article>
        <Filter value={filter} handleChangeFilter={this.handleChangeFilter} />
        
        <ContactList
          contacts={this.getFilterContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    )
  }
}