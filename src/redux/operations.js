import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://646a46755a6ce7a8a216ddec.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
         const response = await axios.get("/contacts");
            return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
   
});

export const addContact = createAsyncThunk("contacts/addContact", async (text, thunkAPI) => {
    try {
         const response = await axios.post("/contacts", {...text});
            return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
   
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
         const response = await axios.delete(`/contacts/${id}`);
            return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
   
});


