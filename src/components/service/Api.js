import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const gameApi = createApi({
    reducerPath: 'GameApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.rawg.io/api'}),
    tagTypes:['show'],
    endpoints:(builder)=>({
        showData : builder.query({
            query:()=>'/games?key=64d7c2e284ce406abb26e55182fdf488&',
            providesTags:["show"]
        })
        
    })
})
export const {useShowDataQuery} = gameApi