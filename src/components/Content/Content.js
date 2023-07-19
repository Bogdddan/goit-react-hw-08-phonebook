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
					<div className={css.userInfo}>
            <div className={css.wlcmTxt}>
              <h3>Welcome</h3> 
              <div>{name}</div>
            </div>
            <div>{email}</div>
					</div>
          
          <div className={css.contactForm}>
            <div className={css.phoneInfo}>
              <h1 className={css.name}>Phonebook</h1>
                  <Filter value={filter} onChange={changeFilter} />
                <ContactList
                  filtredContacts={filtredContacts}
                  onDeleteContact={deleteContact}
                />
            </div>      
          </div>
          <div className={css.addContactForm}>
            <ContactForm onSubmit={addContact} />
            <button className={css.logOutBtn} onClick={handleLogout}>Log out</button>
          </div>
		      
      
          
        </div>
      );
}

export default Content;


// kjfnfnkf9893
// bbdshweuid@gmail.com
// fldmlkfmlkjiooj83892
