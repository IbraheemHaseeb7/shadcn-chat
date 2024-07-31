import { createSlice } from "@reduxjs/toolkit";

type User = {
    email: string | null;
    photoURL: string | null;
    displayName: string | null;
};
const initialState: User = { email: null, photoURL: null, displayName: null };

const usersReducer = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login: (
            state,
            payload: {
                payload: {
                    email: string;
                    photoURL: string;
                    displayName: string;
                };
            }
        ) => {
            state.email = payload.payload.email;
            state.photoURL = payload.payload.photoURL;
            state.displayName = payload.payload.displayName;
        },
    },
});

export const { login } = usersReducer.actions;
export const getUserSelector = (state: any) => state.users;
export const userReducer = usersReducer.reducer;
