// DOM Element
const CounterEl = document.getElementById('counter');
const IncrementEl = document.getElementById('increment')
const DecrementEl = document.getElementById('decrement')

//Action Types
const INCREMENT = 'increment';
const DECREMENT = 'decrement';


//initialState
const initialState = {
    value: 0
}

// Reducer Function
function reduxReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload
        }
    }
    else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload
        }
    }
    else {
        return state
    }
}

// Redux Store
const store = Redux.createStore(reduxReducer)

// UI Render
const render = () => {
    const state = store.getState()
    CounterEl.innerText = state.value;
}
render()
store.subscribe(render)


// EventListener
IncrementEl.addEventListener('click', () => {
    store.dispatch(IncrementAction(5))
})
DecrementEl.addEventListener('click', () => {
    store.dispatch(decrementAction(2))
})

// Dispatch Function
const IncrementAction = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
}
const decrementAction = (value) => {
    return {
        type: DECREMENT,
        payload: value
    }
}