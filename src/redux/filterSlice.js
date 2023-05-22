import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = "";

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        setFilter(state, action) {
            return action.payload
        },
        // prepare(values) {
        //     return {
        //         payload: {
        //             filter: values.filter,
        //         }
        //     }
        // }
    }
}
);

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;