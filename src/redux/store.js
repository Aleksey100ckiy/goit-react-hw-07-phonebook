import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";
import { persistStore, persistReducer } from 'redux-persist'
import { contactReducer } from "./contactSlice";
import { filterReducer } from "./filterSlice";
import storage from 'redux-persist/lib/storage'
// import { createStore } from 'redux'

const persistConfig = {
  key: 'root',
  storage,
}


const rootReducer = combineReducers({

        contacts: contactReducer,
        filter: filterReducer,

});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
})


export const persistor = persistStore(store);
