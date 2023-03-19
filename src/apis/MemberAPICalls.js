import { 
    GET_MEMBER
  , GET_MEMBERS
  , PUT_MEMBER
  , POST_LOGIN
  , POST_REGISTER
} from '../modules/MemberModule'; 

export const callGetMemberAPI = ({memberCode}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8282/api/v1/members/${memberCode}`;

    return async (dispatch, getState) => {

        // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
        // 서버에서 cors 허용을 해주어야 함
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                // "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
            }
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callGetMemberAPI RESULT : ', result);

        dispatch({ type: GET_MEMBER,  payload: result });
        
    };
}

export const callGetMembersAPI = () => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8282/api/v1/members`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
            },
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callGetMembersAPI RESULT : ', result);

        dispatch({ type: GET_MEMBERS,  payload: result.data });
        
    };
}

export const callGetMemberUpdateAPI = ({memberCode}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8282/api/v1/members/update/${memberCode}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
            },
            // body: JSON.stringify({
                // memberCode: form.memberCode,
                // deptCode: form.deptCode,
                // jobCode: form.jobCode,  
                // memberPwd: form.memberPwd,
                // memberName: form.memberName,
                // memberBirth: form.memberBirth,
                // memberPhone: form.memberPhone,
                // memberEmail: form.memberEmail,
                // memberAddress: form.memberAddress,
                // memberExtension: form.memberExtension,
                // memberStartDate: form.memberStartDate,
                // memberEndDate: form.memberEndDate,
                // memberIsOut: form.memberIsOut
            // })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callGetMemberUpdateAPI RESULT : ', result);

        dispatch({ type: PUT_MEMBER,  payload: result.data });
        
    };
}


export const callLoginAPI = ({form}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8282/auth/login`;
    
    return async (dispatch, getState) => {

        /* 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능 */
        /* 서버에서 cors 허용을 해주어야 함 */
        /* headers에 Access-Control-Allow-Origin을 *로 해서 모든 도메인에 대해 허용한다. */
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"      
            },
            body: JSON.stringify({
                memberCode: form.memberCode,
                memberPwd: form.memberPwd
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callLoginAPI RESULT : ', result);
        if(result.status === 200){
            window.localStorage.setItem('accessToken', result.data.accessToken);            
        }
        dispatch({ type: POST_LOGIN,  payload: result });
        
    };
}


export const callLogoutAPI = () => {
    

    return async (dispatch, getState) => {            

        dispatch({ type: POST_LOGIN,  payload: '' });        
        console.log('[MemberAPICalls] callLogoutAPI RESULT : SUCCESS');
    };
}


export const callRegisterAPI = ({form}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8282/auth/signup`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                memberCode: form.memberCode,
                deptCode: form.deptCode,
                jobCode: form.jobCode,  
                memberPwd: form.memberPwd,
                memberName: form.memberName,
                memberBirth: form.memberBirth,
                memberPhone: form.memberPhone,
                memberEmail: form.memberEmail,
                memberAddress: form.memberAddress,
                memberExtension: form.memberExtension,
                memberStartDate: form.memberStartDate,
                memberEndDate: form.memberEndDate,
                memberIsOut: form.memberIsOut
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callRegisterAPI RESULT : ', result);        
        
        if(result.status === 201){
            dispatch({ type: POST_REGISTER,  payload: result });
        }        
    };
}