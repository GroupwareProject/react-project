import { GET_BOARD, GET_BOARDS, POST_BOARD, PUT_BOARD, DELETE_BOARD } from '../modules/BoardModule';

export const callBoardAPI = ({boardNo}) => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8282/api/v1/board/${boardNo}`;

    console.log('request', requestURL);
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        })
            .then(response => response.json());

        console.log('[BoardAPICalls] callBoardDetailAPI RESULT : ', result);
        if (result.status === 200) {
            console.log('[BoardAPICalls] callBoardDetailAPI SUCCESS');
            dispatch({type: GET_BOARD, payload: result});
        }

    };
}

export const callBoardListAPI = () => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8282/api/v1/board`;

    console.log('request', requestURL);
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        })
            .then(response => response.json());

        console.log('[BoardAPICalls] callBoardDetailAPI RESULT : ', result);
        if (result.status === 200) {
            console.log('[BoardAPICalls] callBoardDetailAPI SUCCESS');
            dispatch({type: GET_BOARDS, payload: result.data});
        }

    };
}

export const callBoardInsertAPI = ({form}) => {
    

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8282/api/v1/board/write`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: JSON.stringify({
                boardTitle: form.boardTitle,
                boardContent: form.boardContent,
            })
        })
        .then(response => response.json());

        if(result.status === 200){
            console.log('[callBoardInsertAPICalls] callBoardInsertAPI SUCCESS');
            dispatch({ type: POST_BOARD,  payload: result });
        } 
    };    
}   

export const callBoardUpdateAPI = ({form}) => {
    console.log('[BoardAPICalls] callBoardUpdateAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8282/api/v1/board/update`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: form
        })
        .then(response => response.json());

        console.log('[ProduceAPICalls] callProductUpdateAPI RESULT : ', result);

        dispatch({ type: PUT_BOARD,  payload: result });
    };    
}

export const callBoardDeleteAPI = ({boardNo}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8282/api/v1/board/detail/${boardNo}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());

        if(result.status === 200){
            console.log('[callBoardDeleteAPICalls] callBoardDeleteAPI SUCCESS');
            dispatch({ type: DELETE_BOARD,  payload: result.data });      
        } 
    };
}