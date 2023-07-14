import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };
    
    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    }

    nameInputId = nanoid();
    numberInputId = nanoid();

    render() {

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor={this.nameInputId}>
            Name
          </Label>
          <Input
                value={this.state.name}
                id={this.nameInputId}
                onChange={this.handleChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="Please, enter name"
                />
        
            <Label htmlFor={this.numberInputId}>
              Number
            </Label>
            <Input
                value={this.state.number}
                id={this.numberInputId}
                onChange={this.handleChange}
                type="tel"
                name="number"    
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                placeholder="Please, enter number"
                />
                
          <Button type="submit">Add contact</Button>
        </Form>
      </div>
    )
  }
}