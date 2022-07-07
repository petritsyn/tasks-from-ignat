import {UserType} from "./tests/homeWorkReducer.test";

type ActionType = {
    type: string
    payload: string | number
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state.sort((a, b) => {
                    if (a.name > b.name) return 1
                    if (a.name < b.name) return -1
                    return 0
                })]
            }
            if (action.payload === 'down') {
                return [...state.sort((a, b) => {
                    if (a.name > b.name) return -1
                    if (a.name < b.name) return 1
                    return 0
                })]
            }
            return state
        }
        case 'check': {
            return [...state.filter(el => el.age >= action.payload)]
        }
        default: return state
    }
}