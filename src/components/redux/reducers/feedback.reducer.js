const feedback = (state = [], action) => {
    switch( action.type ) {
        case 'ADD_INPUT':
            return [...state, action.payload]
        default:
            return state
    }
}

export default feedback;