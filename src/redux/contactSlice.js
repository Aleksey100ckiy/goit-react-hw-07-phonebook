import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

// const contactInitialState = [
//     { "number": "0635675", "name": "Marina", "id": "ph921gGFo1wx08vAQiVcN" },
//     { "number": "1115", "name": "Ben", "id": "ph921gGFo1wx08vAQiVcd" },
//     { "number": "1115", "name": "test", "id": "ph921gGFo1uu08vAQiVcb" }
    
// ];
const handlePending = state => {
    state.isLoading = true;
};
 
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}


const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers:{
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);

        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(contact => contact.id === action.payload);
            state.items.splice(index, 1);
        },
        [deleteContact.rejected]: handleRejected,
}    
});

export const contactsReducer = contactSlice.reducer;


// reducers: {
    //     fetchingInProgress(state){
    //         state.isLoading = true
    //     },
    //     fetchingSucces(){
    //     state.IsLoading = false,
    //     state.error = null,
    //     state.items = action.payload
    //     },
    //     fetchingError(){
    //     state.isLoading = false,
    //     state.error = action.payload
    //     },
        // addContact(state, action) {
        //     state.push(action.payload)
        // },
        // prepare(values) {
        //     return {
        //         payload: {
        //             name: values.name,
        //             number: values.number,
        //             id: nanoid(),
        //       }
        //   }
        // },
        // deleteContact(state, action) {
        //    const index = state.findIndex(contact => contact.id === action.payload);
        //     state.splice(index, 1);
        // },
    // }
    

// export const { addContact, deleteContact } = contactSlice.actions;
// export const contactReducer = contactSlice.reducer;
// export const { fetchingInProgress, fetchingSucces, fetchingError } = contactSlice.actions;