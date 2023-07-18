import React from 'react';
import { useAuth } from '../../hooks/index';
import { logOut } from '../../redux/auth/operations';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/auth/slice';
import { addedContact, deletedContact } from '../../redux/auth/slice';
import { getСontacts, getFilter } from '../../redux/auth/selectors';
import { ContactList } from '../ContactList/ContactList';
import css from './Content.module.css';

function Content() {
    const {
        user: { name, email }
    } = useAuth();

    const dispatch = useDispatch();
    const contacts = useSelector(getСontacts);
    const filter = useSelector(getFilter);

    const handleLogout = () => {
        dispatch(logOut());
    }

		const deleteContact = contactId => {
			dispatch(deletedContact(contactId));
		};
	
		const addContact = (name, number) => {
			if (
				contacts.find(
					contact => contact.name.toLowerCase() === name.toLowerCase()
				)
			) {
				alert(`${name} is already in contacts`);
				return;
			}
	
			dispatch(addedContact(name, number));
		};
	
		const changeFilter = event => dispatch(setFilter(event.currentTarget.value));
	
		const getFiltredContacts = () => {
			const normalizedFilter = filter.toLowerCase();
			return contacts.filter(contact =>
				contact.name.toLowerCase().includes(normalizedFilter)
			);
		};
		const filtredContacts = getFiltredContacts();
		console.log(name);

    return  (
        <div className={css.container}>
					<div>Welcome {name}</div>
          <h1 className={css.name}>Phonebook</h1>
          <ContactForm onSubmit={addContact} />
    
          <h2 className={css.secondName}>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            filtredContacts={filtredContacts}
            onDeleteContact={deleteContact}
          />
					         <div>
            <button onClick={handleLogout}>Log out</button>
        </div>
        </div>
      );
}

export default Content;


// працюючий код 
// import { useAuth } from '../../hooks/index';
// import { useDispatch } from 'react-redux';
// import { logOut } from '../../redux/auth/operations';

// function Content() {
//     const {
//         user: { name, email }
//     } = useAuth();

//     const dispatch = useDispatch();
//     const handleLogout = () => {
//         dispatch(logOut());
//     }

//     return <div>
//         <div>I am Content component.</div>
//         <div>You name is: {name}</div>
//         <div>You email is: {email}</div>
//         <div>
//             <button onClick={handleLogout}>Log out</button>
//         </div>
//     </div>
// }

// export default Content;
