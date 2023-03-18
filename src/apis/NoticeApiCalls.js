import { GET_NOTICE } from '../modules/'

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