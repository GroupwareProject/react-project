import { combineReducers } from "redux";
import memberReducer from '../modules/MemberModule';
import noticeReducer from '../modules/NoticeModule';

const rootReducer = combineReducers({
    memberReducer, 
    noticeReducer
});

export default rootReducer;