import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

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

const climbApi = createApi({
    reducerPath: 'climbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://http://localhost:5000'}),
    endpoints: (builder) => ({
        // getUserClimbs: builder.query({
        //     query: (user) => 
        //         user ?
        //         [user.map()]
        // })
    })
})