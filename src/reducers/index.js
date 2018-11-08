import { combineReducers } from 'redux'
import {
    GET_LIST
} from '../actions'


const getList = (state = [], action) => {
    switch (action.type) {
        case GET_LIST:
            console.dir(state)
            console.log(action, "action")
            return {
                ...state,
                list: action.data
              }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    getList
})

export default rootReducer