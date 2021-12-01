import { INCREMENT, DECREMENT } from '../action-types'

export default function count(state = 0, { type, data }) {
    switch (type) {
        case INCREMENT:
            return state + data
        case DECREMENT:
            return state - data
        default:
            return state
    }
}
