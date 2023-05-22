import {  useEffect } from "react";

import { FormField } from './FormField/FormField'
import ContactList from "./ContactList/ContactList";
import FindField from "./FindField/FindField";
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from "redux/operations";
import {selectContact, selectFilter } from "../redux/selectors"

import { setFilter } from 'redux/filterSlice';




export default function App () {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContact);
  const filterEl = useSelector(selectFilter); 
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterEl.toLowerCase()));

  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = event => {
    // event.preventDefault();
     dispatch(addContact(event));
     console.log(event);
    event.resetForm();
  };


  const handleFilterChanging = event => {
    event.preventDefault();
    dispatch(setFilter(event.target.value))

    
  }

  
  const handleDel = (id) => dispatch(deleteContact(id)) 

return (<div>
  <FormField contArr={contacts} onSubmit={handleSubmit}></FormField> 
       <FindField value={filterEl} onChange={handleFilterChanging}></FindField>
        {(contacts.length > 0) ? <ContactList onDelete={handleDel} contactsList={ (filteredContacts) ? filteredContacts : null} ></ContactList> :
        <p>Contacts</p>}
      </div>
  
)
}
