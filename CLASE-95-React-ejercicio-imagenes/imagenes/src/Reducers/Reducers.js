export const INIT = 'INIT';
export const ADD = 'ADD';

export default (state, action) => {
    switch(action.type) {
        case INIT:
            return action.init;
        case ADD:
            return [...state, action.payload];    
        default: 
            return state;
    }
};