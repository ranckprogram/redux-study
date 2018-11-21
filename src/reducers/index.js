import { combineReducers } from 'redux'
import {
    GET_LIST
} from '../actions'


const list = (state = [], action) => {
    switch (action.type) {
        case GET_LIST:
            return action.data
        default:
            return state
    }
}

const rootReducer = combineReducers({
    list
})

export default rootReducer