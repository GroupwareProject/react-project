import { combineReducers } from "redux";
import memberReducer from '../modules/MemberModule';
import noticeReducer from '../modules/NoticeModule';
import boardReducer from '../modules/BoardModule';

const rootReducer = combineReducers({
    memberReducer, 
    noticeReducer,
    boardReducer
});

export default rootReducer;