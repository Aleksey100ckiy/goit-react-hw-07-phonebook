// import React, { useState, useEffect } from "react";
// import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";
import { FormField } from './FormField/FormField'
import ContactList from "./ContactList/ContactList";
import FindField from "./FindField/FindField";
import { useSelector } from 'react-redux';


import { useDispatch } from "react-redux";
import { addContact, deleteContact } from "redux/contactSlice";
import { setFilter } from 'redux/filterSlice';
import { getContact, getFilter } from 'redux/selectors';



export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));

  
   const handleSubmit = (event, ) => {

     dispatch(addContact(event));
     console.log(event);
    // event.reset()
  };


  const handleFilterChanging = event => {
    event.preventDefault();
    dispatch(setFilter(event.target.value))
    console.log(event.target.value)
    console.log('filter-', filter);
  }

  const handleDel = (id) => {
 
  dispatch(deleteContact(id));

} 

return (<div>
  <FormField contArr={contacts} onSubmit={handleSubmit}></FormField> 
       <FindField value={filter} onChange={handleFilterChanging}></FindField>
        {(contacts.length > 0) ? <ContactList onDelete={handleDel} contactsList={ (filteredContacts.length > 0) ? filteredContacts : contacts} ></ContactList> :
        <p>Contacts</p>}
      </div>
  
)
}
