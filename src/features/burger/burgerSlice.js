import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfBurgers: 15,
}

const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfBurgers -= action.payload
        },
        restocked: (state, action) => {
            state.numOfBurgers += action.payload
        }
    },
})


export default burgerSlice.reducer
export const { ordered, restocked } = burgerSlice.actions