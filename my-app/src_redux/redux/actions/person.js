import { ADDPERSON } from '../action-types'

export function addPerson(data) {
    return { type: ADDPERSON, data }
}
