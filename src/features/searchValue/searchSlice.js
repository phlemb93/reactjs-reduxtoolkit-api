import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: ''
}

const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        inputed: (state, action) => {
            state.value = action.payload
        }
    }
})

export default inputSlice.reducer
export const { inputed } = inputSlice.actions