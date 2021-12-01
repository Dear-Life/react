import { ADDPERSON } from '../action-types'

export default function persons(state = [], { type, data }) {
    switch (type) {
        case ADDPERSON:
            return [data, ...state]
        default:
            return state
    }
}
