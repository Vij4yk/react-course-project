import { createStore } from 'redux';

// function to generate action objects known as action generators

const incrementCount = ({incrementBy = 1} = {}) => ({

        type: 'INCREMENT',
        incrementBy: incrementBy
    
});

const decrementCount = ({decrementBy = 1} = {}) => ({

        type: 'DECREMENT',
        decrementBy

});

const resetCount = () => ({ type: 'RESET'});

const setCount = ( count ) => ({ type: 'SET', count });

// reducers are pure functions.  Output is determined by input.
// never change state or action in the reducer

const countReducer = (state = { count: 0 }, action ) => {

    switch (action.type){

        case 'INCREMENT':

            return {

                count: state.count + action.incrementBy

            }

        case 'DECREMENT':

            
        
            return {

                count: state.count - action.decrementBy

            }

        case 'SET':
        
            return {

                count: action.count

            }

        case 'RESET':

            return {

                count: 0

            }

        default:

            return state;

        }

};


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {

    console.log(store.getState());

});


// Actions - an object that gets sent ot the store

// increment, decrement, reset  if multiiple words describe action, use underscore.

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount(101));



