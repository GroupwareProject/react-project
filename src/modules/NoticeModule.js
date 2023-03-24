import {createActions, handleActions} from 'redux-actions';



/* 초기값 */
const initialState = {
   inputData: [
   
   ]};

/* 액션 */
export const GET_NOTICE       = 'notice/GET_NOTICE';
export const POST_NOTICE      = 'notice/POST_NOTICE';
export const PATCH_NOTICE       = 'notice/PATCH_NOTICE';
export const DELETE_NOTICE    = 'notice/DELETE_NOTICE';
export const GET_NOTICEDETAIL = 'notice/GET_NOTICEDETAIL';

const actions = createActions({
    [GET_NOTICE]: () => {},
    [POST_NOTICE]: () => {},
    [PATCH_NOTICE]: () => {},
    [DELETE_NOTICE]: () => {},
    [GET_NOTICEDETAIL]: () => {}
});

/* 리듀서 */
const noticeReducer = handleActions(
    {
        [GET_NOTICE]: (state, {payload}) => {

            return payload;
        },
        [POST_NOTICE]: (state, {payload}) => {

            return payload;
        },
        [PATCH_NOTICE]: (state, {payload}) => {

            return payload;
        },
        [DELETE_NOTICE]: (state, {payload}) => {

            return payload;
        },
        [GET_NOTICEDETAIL]: (state, {payload}) => {

            return payload
        }
    },
    initialState
);



export default noticeReducer;