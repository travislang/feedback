const feedback = (state = [], action) => {
    switch( action.type ) {
        case 'ADD_INPUT':
            if(state.length < 4) {
                return [...state, action.payload]
            }
            else {
                return state
            }
        case 'CLEAR_INPUTS':
            return []
        default:
            return state
    }
}

export default feedback;