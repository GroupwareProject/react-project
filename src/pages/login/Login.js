import LoginCSS from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { POST_REGISTER } from '../../modules/MemberModule';

import { callLoginAPI } from '../../apis/MemberAPICalls';
import { decodeJwt } from '../../utils/tokenUtils';

function Login(){

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const loginMember = useSelector(state => state.memberReducer);  

    const [form, setForm] = useState({
        memberCode: '',
        memberPwd: ''
    });

    useEffect(() => {
        
        if(loginMember.status === 200){
            console.log("[Login] Login SUCCESS {}", loginMember);

            navigate("/main", { replace: true });
        } else {
            // window.console.log("비밀번호가 틀렸습니다.")
            navigate("/", { replace: true });
        }

    //     // /* 회원 가입 후 로그인 페이지로 안내 되었을 때 */
    //     // if(loginMember.status === 201){

    //     //     loginMember.status = 100  // Continue
    //     //     dispatch({ type: POST_REGISTER,  payload: loginMember });
    //     // }  
    }
    ,[loginMember]);

    /* 로그인 상태일 시 로그인페이지로 접근 방지 */
    if(loginMember.length > 0) {
        console.log("[Login] Login is already authenticated by the server");        
        return navigate("/main", { replace: true });
    }
    
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    
    // 로그인 완료
    const handleOnClick = () => {
        dispatch(callLoginAPI({
            form: form
        }));
        alert('로그인이 완료되었습니다.');
        navigate("/main", { replace: true });
        window.location.reload();
    }

    // 엔터로 로그인
    // const handleOnKeyPress = e => {
    //     if(e.key === 'Enter'){
    //         handleOnClick();
    //     }
    // };

    return(
        <div className={ LoginCSS.backgroundDiv }>
            <div className={ LoginCSS.loginTableDiv }>
                <div className={ LoginCSS.logindiv }>
                    <h2>groupware</h2>
                    {/* <h3 style={{fontSize: "15px"}}>로그인</h3> */}
                    <input
                        type="text"
                        name="memberCode"
                        placeholder="사번 입력"
                        autoComplete="off"
                        onChange={ onChangeHandler }
                        autoFocus="autofocus"
                    />
                    <input
                        type="password"
                        name="memberPwd"
                        placeholder="비밀번호 입력"
                        autoComplete="off"
                        onChange={ onChangeHandler }
                        // onKeyPress={ handleOnKeyPress }
                    />
                    <button
                        onClick={ handleOnClick }
                    >
                        로그인
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;