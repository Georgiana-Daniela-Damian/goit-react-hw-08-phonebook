import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contactOperations';
import { setFilter } from '../redux/filter/filterSlice';
import { addContact, deleteContact } from '../redux/contacts/contactOperations';
import {
  selectVisibleContacts,
  selectIsLoading,
  selectFilter,
  selectError,
} from '../redux/contacts/contactSelectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';

export const ContactsPage = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  console.log('visibleContacts', visibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleSetFilter = newFilter => {
    dispatch(setFilter(newFilter));
  };

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm addContact={handleAddContact} contacts={visibleContacts} />

      <h2 className="title">Contacts</h2>
      <Filter filter={filter} setFilter={handleSetFilter} />
      {isLoading && <Loader />}
      {error && <b>Error: {error}</b>}
      {visibleContacts && (
        <ContactList
          contacts={visibleContacts}
          deleteContact={handleDeleteContact}
        />
      )}
    </div>
  );
};
