import {useReducer} from 'react';

const UseArrays = () => {

    const [todos, todosDispatch] = useReducer(reducer, []);

    return [
        todos,
        {
            add,
            getById,
            replaceById,
            updateById,
            removeById,
            clear
        }
    ]
        
};


export default UseArray;
