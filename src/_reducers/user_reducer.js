import {SIGNUP_USER} from '../_actions/types'

export default function(state={},action){
    switch(action.type){
        case SIGNUP_USER:
            return {...state, signup: action.payload }
        default:
            return state;
    }
}