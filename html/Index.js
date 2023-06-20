// DOM Element
const CounterEl = document.getElementById('counter');
const IncrementEl = document.getElementById('increment')
const DecrementEl = document.getElementById('decrement')

//initialState
const initialState = {
    value: 0
}

// Reducer Function
function reduxReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1
        }
    }
    else if (action.type === 'decrement' && state.value > 0) {
        return {
            ...state,
            value: state.value - 1
        }
    }
    else {
        return state
    }
}

// Redux Store
const store = Redux.createStore(reduxReducer)

const render = () => {
    const state = store.getState()
    CounterEl.innerText = state.value;
}
render()

store.subscribe(render)

// EventListener
IncrementEl.addEventListener('click', () => {
    store.dispatch({
        type: 'increment'
    })
})
DecrementEl.addEventListener('click', () => {
    store.dispatch({
        type: 'decrement'
    })
})