import PropTypes from 'prop-types';
import { ContactElement } from 'components/ContactElement/ContactElement';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
    return (
        <List>
            {contacts.map(({ name, number, id }) => (
                <ContactElement>
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    deleteContact={deleteContact}
                </ContactElement>
            ))}
        </List>
    );
};







