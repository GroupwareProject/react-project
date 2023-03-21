import { GET_NOTICE, POST_NOTICE, PATCH_NOTICE, DELETE_NOTICE } from '../modules/NoticeModule';

export const callNoticeListAPI = () => {

    let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8282/api/v1/notice`;

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

        console.log('[NoticeAPICalls] callNoticeDetailAPI RESULT : ', result);
        if (result.status === 200) {
            console.log('[NoticeAPICalls] callNoticeDetailAPI SUCCESS');
            dispatch({type: GET_NOTICE, payload: result.data});
        }

    };
}

    export const callNoticeInsertAPI = ({form}) => {
    

        const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8282/api/v1/notice/write`;
    
        return async (dispatch, getState) => {
    
            const result = await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
                },
                body: form
            })
            .then(response => response.json());
    
            if(result.status === 200){
                console.log('[callNoticeInsertAPICalls] callNoticeInsertAPI SUCCESS');
                dispatch({ type: POST_NOTICE,  payload: result });
            } 
        };    
    }    

    export const callNoticeUpdateAPI = ({form}) => {
        console.log('[NoticeAPICalls] callNoticeUpdateAPI Call');
    
        const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8282/api/v1/notice/detail`;
    
        return async (dispatch, getState) => {
    
            const result = await fetch(requestURL, {
                method: "PATCH",
                headers: {
                    "Accept": "*/*",
                    "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
                },
                body: form
            })
            .then(response => response.json());
    
            console.log('[ProduceAPICalls] callProductUpdateAPI RESULT : ', result);
    
            dispatch({ type: PATCH_NOTICE,  payload: result });
            
        };    
}

export const callNoticeDeleteAPI = ({noticeNo}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8282/api/v1/notice/detail/${noticeNo}`;

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
            console.log('[callNoticeDeleteAPICalls] callNoticeDeleteAPI SUCCESS');
            dispatch({ type: DELETE_NOTICE,  payload: result.data });      
        } 
    };
}

export const callNoticeDetailAPI = ({noticeNo}) => {
    console.log('[NoticeAPICalls] callNoticeDetailAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8282/api/v1/notice/detail/${noticeNo}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            noticeNo: noticeNo
        })
        .then(response => response.json());

        console.log('[ProduceAPICalls] callProductDetailAPI RESULT : ', result);

        dispatch({ type: GET_NOTICE,  payload: result });
        
    };    
}

    
    

