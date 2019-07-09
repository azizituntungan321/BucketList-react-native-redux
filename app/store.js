import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

const initialState = {
    list: []
}

reducer = (state, action) => {
    if (action.type === 'submit') {
        state = { ...state, list: [...state.list, action.payload] }
    } else if (action.type === 'edit') {
        state = {
            ...state, list: [
                ...state.list.slice(0, action.payload.Index), action.payload.Text,
                ...state.list.slice(action.payload.Index + 1)
            ]
        }
    } else if (action.type === 'delete') {
        state = {
            ...state, list: [
                ...state.list.slice(0, action.payload),
                ...state.list.slice(action.payload + 1)
            ]
        }
    }
    return state
}

const middleware = applyMiddleware(logger)
const store = createStore(reducer, initialState, middleware)

export { store }