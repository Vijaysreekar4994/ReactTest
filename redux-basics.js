/* //this is node js syntax in this file
const redux = require ('redux');
const createStore = redux.createStore;
//here create store will allow us to create new redux store

const initialState = {
    counter: 0
}
//to initialise the state
//its a JS object- stores single value or multiple
//it holds the counter that i created in src folder, initially it would be 0

const rootReducer = (state = initialState, action ) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
};
// reducer
// reducer will take two params - one is old state and other is updated state
// then the function has to return the updated state
//it returns the state we already have
//as per the ES6 syntax we can assign the state and we can change whenever we want- it will take dafault instead
// inside if statement - always define immutable data and we are adding state.counter to get access to the old counter
//inside if statement- ...state is that we are copying the old state properties and values- by doing this we will return updated counter or state


const store = createStore(rootReducer);
//here we are creating a store
// store
// by passing rootReducer, store is created that reducer

console.log(store.getState());
// if we want to know the state of the store


store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});
// subscription
// for the subscriptions we dont need to add getState
//in the body of the function, we can execute any code we want on state updates
// subscription should be at right after the store was created
// subscribe comes before dispatching the actions and this function in the subscribe method will be execute whenever action is dispatched and mutates the store
// subscription will get triggered whenever the state is updated

store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());
//dispatching action
//action is dispatched by accessing the store
//dispatch is a function and it takes an argument- argument is an action- that should be the JS object which needs to have a type property
//this is importand building block in getting the information which type of action was dispatched and what should we do in the reducer
// type is unique identifier of our choice
// type covention is all uppercase string - exampl- INC_COUNTER - it means increment the counter- it should be descriptive
//here- INC is to just increment but ADD should add specific number to the counter and that value needs to be passed along with the type
//to the type, we can add any other properties if need - like VALUE,NAME,ID...
//inside the type also we can create another object which group all the data like payload:{}
// here we can dispatch


 */