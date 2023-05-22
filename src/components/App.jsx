import {  useEffect } from "react";
// import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";
import { FormField } from './FormField/FormField'
import ContactList from "./ContactList/ContactList";
import FindField from "./FindField/FindField";
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from "redux/operations";
import {selectContact, selectFilter } from "../redux/selectors"


// import { useDispatch } from "react-redux";
// import { addContact, deleteContact } from "redux/contactSlice";
// import { setFilter } from 'redux/filterSlice';
// import { getContact, getFilter } from 'redux/selectors';



export default function App () {
  const dispatch = useDispatch();
  // const { items, isLoading, error } = useSelector(getContact);
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  
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
    dispatch(selectFilter(event.target.value))
    console.log(event.target.value)
    console.log('filter-', filter);
  }

//   const handleDel = (id) => {
 
//   dispatch(deleteContact(id));

// } 
  
  const handleDel = (id) => dispatch(deleteContact(id)) 

return (<div>
  <FormField contArr={contacts} onSubmit={handleSubmit}></FormField> 
       <FindField value={filter} onChange={handleFilterChanging}></FindField>
        {(contacts.length > 0) ? <ContactList onDelete={handleDel} contactsList={ (filteredContacts.length > 0) ? filteredContacts : contacts} ></ContactList> :
        <p>Contacts</p>}
      </div>
  
)
}
// (filteredContacts.length > 0) ? filteredContacts :