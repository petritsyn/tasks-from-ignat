export type loadingOnACType = ReturnType<typeof loadingOnAC> | ReturnType<typeof loadingOffAC>
type actionsType = loadingOnACType
export type initStateType = typeof initState

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: actionsType): initStateType => { // fix any
    switch (action.type) {
        case 'IS-LOADING-ON': {
            return {...state, isLoading: true}
        }
        case "IS-LOADING-OFF": {
            return {...state, isLoading: false}
        }
        default: return state
    }
}

export const loadingOnAC = () => {
    return {
        type: 'IS-LOADING-ON'
    } as const
}

export const loadingOffAC = () => {
    return {
        type: 'IS-LOADING-OFF'
    } as const
}