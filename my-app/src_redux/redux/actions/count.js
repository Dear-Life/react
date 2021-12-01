import { INCREMENT, DECREMENT } from '../action-types'

export function increment(data) {
    return { type: INCREMENT, data }
}

export function decrement(data) {
    return { type: DECREMENT, data }
}

export function incrementAsync(data) {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment(data))
        }, 1000);
    }
}
