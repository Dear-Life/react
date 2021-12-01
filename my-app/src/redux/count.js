import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'count',
    initialState: 0,
    reducers: {
        increment: (state, { payload }) => {
            return state + payload
        },
        decrement: (state, { payload }) => {
            return state - payload
        }
    }
})

export function incrementAsync(payload) {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment(payload))
        }, 1000);
    }
}

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer