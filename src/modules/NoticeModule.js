import {createActions, handleActions} from 'redux-actions';


const _SAVE = 'DATA_SAVE';
/* 초기값 */
const initialState = {
   inputData: [
    {
        noticeTitle: '',
        noticeContent: ''
    }
   ]};

/* 액션 */
export const GET_NOTICE       = 'notice/GET_NOTICE';
export const POST_NOTICE      = 'notice/POST_NOTICE';
export const PUT_NOTICE       = 'notice/PUT_NOTICE';
export const DELETE_NOTICE    = 'notice/DELETE_NOTICE';

const actions = createActions({
    [GET_NOTICE]: () => {},
    [POST_NOTICE]: () => {},
    [PUT_NOTICE]: () => {},
    [DELETE_NOTICE]: () => {},
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
        [PUT_NOTICE]: (state, {payload}) => {

            return payload;
        },
        [DELETE_NOTICE]: (state, {payload}) => {

            return payload;
        },
    },
    initialState
);

export const dataSave = (inputData) => ({
    type: _SAVE,
    inputData: {
        noticeTitle: inputData.noticeTitle,
        noticeContent: inputData.noticeContent
    }
})

export default noticeReducer;