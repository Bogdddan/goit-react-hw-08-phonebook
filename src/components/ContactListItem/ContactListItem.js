import React from 'react';
import css from './ContactList.module.css';

export const ContactListItem = ({ name, number, onDeleteContact, id }) => (
  <li className={css.list}>
    {name} : {number}
    <button onClick={() => onDeleteContact(id)}>Delete</button>
  </li>
);  