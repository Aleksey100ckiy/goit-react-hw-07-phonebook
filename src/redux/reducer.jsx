// import { createReducer } from "@reduxjs/toolkit";
// // import { statusFilters } from "./constants";
// import { addContact, delContact } from "./actions";
// const tasksInitialState = [];

// export const tasksReducer = createReducer(tasksInitialState, {
//     [addContact]: (state, action) => {
//         // immer
//         return [...state, action.payload];
//     },
//     [delContact]: (state, action) => {
//         return state.filter(task => task.id !== action.payload);
//     }
// });


// import { addContact, deleContact } from "./actions";

// export const taskReducer = (state = tasksInitialState, action) => {
//     switch (action.type) {
//         case 'task/addContact':
//             return [...state, action.payload];
//         case 'task/delContact':
//             return state.filter(task => task.id !== action.payload);
//         default:
//             return state;
//     }
// }