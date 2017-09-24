
export const ADD_COUNTER = 'ADD_COUNTER';
export const REMOVE_COUNTER = 'REMOVE_COUNTER';


export const addCounter = () =>({
    type: ADD_COUNTER,
    payload: 1
});

export const removeCounter = () =>({
    type: REMOVE_COUNTER, 
    payload: 1
    
})