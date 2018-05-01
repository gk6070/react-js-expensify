import { createStore } from 'redux';
// console.log("101");

// const add = ({a, b}, c) => {
//     return a + b + c;
// };

// console.log(add({a:1 , b:2}, 100));
const incrementCount =  ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
     
});

const decrementCount =  ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
     
});

const setCount =  ({ count} = {}) => ({
    type: 'SET',
    count
     
});

const resetCount =  () => ({
    type: 'RESET'
     
});

//Reducers
//1.Reducers are pure functions
//2.Never change state or action


const countReducer = (state = {count : 0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return{
                count: state.count+incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return{
                count: state.count-decrementBy
            };
        case 'RESET':
            return{
                count: 0
            };
        case 'SET':
            return{
                count: action.count
            }
        default:
            return state;
    }
    
};

const store = createStore(countR)
const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
});


store.dispatch(incrementCount({ incrementBy: 10}))

store.dispatch(incrementCount());

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
// // unsubscribe();

// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch(decrementCount({ decrementBy: 1111}))
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 11
// });
store.dispatch(resetCount())
// store.dispatch({
//     type: 'RESET'
// });
store.dispatch(setCount({count : 10}))
// store.dispatch({
//     type: 'SET',
//     count: 10
// });
