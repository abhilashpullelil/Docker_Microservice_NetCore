import { combineReducers } from 'redux';
import { UPDATE_USER } from './StoreActions';

function sampleAlert(state, action) {
    alert(action);
    return state;
}

function updateUserName(state, action) {
    switch (action.type) {
        case UPDATE_USER: return action.userName
        default : return state;
    }
}

const userReducer = combineReducers({
    sampleAlert,
    updateUserName
});

export default userReducer;