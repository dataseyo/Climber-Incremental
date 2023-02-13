import { createSlice } from "@reduxjs/toolkit";

type Climb = {
    grade: string,
    attempts: string
}

type User = {
    _id: string,
    name: string,
    level: number,
    chalk: number,
    climbs: [],
    password: string,
    avatar: []
}

const initialState: User = {
    _id: "",
    name: "",
    level: 1,
    chalk: 0,
    climbs: [],
    password: "",
    avatar: []
}

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        login: (state, action) => {

        },

        logout: () => initialState,

        getUserInfo: () => {

        }
    }
})

export const {

} = userSlice.actions

export default userSlice.reducer