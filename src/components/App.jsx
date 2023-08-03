import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Title, Article } from './App.styled.';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    const normalizedName = name.toLowerCase();

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === normalizedName
      )) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
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
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <div>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />

        <Article>Contacts</Article>
        <Filter value={this.state.filter} handleChangeFilter={this.handleChangeFilter} />
        
        <ContactList
          contacts={this.getFilterContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    )
  }
}