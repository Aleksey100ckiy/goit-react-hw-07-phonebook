import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactInitialState = [
    { "number": "0635675", "name": "Marina", "id": "ph921gGFo1wx08vAQiVcN" },
    { "number": "1115", "name": "Ben", "id": "ph921gGFo1wx08vAQiVcd" },
    { "number": "1115", "name": "test", "id": "ph921gGFo1uu08vAQiVcb" }
    
];
const contactSlice = createSlice({
    name: 'contacts',
    initialState: contactInitialState,
    reducers: {
        addContact(state, action) { 
            state.push(action.payload)
        },
        prepare(values) {
            return {
                payload: {
                    name: values.name,
                    number: values.number,
                    id: nanoid(),
              }
          }  
        },
        deleteContact(state, action) {
           const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        },
    }
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;