const INITIAL_STATE = {
    states: []
}

export const stateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_STATEDATA":
            return {
                ...state,
                states: [...state.states, action.payload]
            }
        case "ADD_DISTRICTDATA":
            return {
                ...state,
                states: [action.payload]
            }
        case "DELETE_DATA":
            const data = state.states.filter((element) => element.id !== action.payload)
            return {
                ...state,
                states: data
            }
        default:
            return state
    }

}

export default stateReducer;