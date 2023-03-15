import { combineReducers } from "redux";
import memberReducer from '../modules/MemberModule';

const rootReducer = combineReducers({
    memberReducer,
});

export default rootReducer;