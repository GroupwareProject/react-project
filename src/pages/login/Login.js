import LoginCSS from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { callLoginAPI } from '../../apis/MemberAPICalls';

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
            navigate("/", { replace: true });
        }

        /* 회원 가입 후 로그인 페이지로 안내 되었을 때 */
        // if(loginMember.status === 201){

        //     loginMember.status = 100  // Continue
        //     dispatch({ type: POST_REGISTER,  payload: loginMember });
        // }  
    }
    ,[loginMember]);
    
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    
    const handleOnClick = () => {
        dispatch(callLoginAPI({
            form: form
        }));
        alert('로그인이 완료되었습니다.');
        // window.location.reload();
    }

    const handleOnKeyPress = e => {
        if(e.key === 'Enter'){
            handleOnClick();
        }
    };

    return(
        <div className={ LoginCSS.logindiv }>
            <h1>로그인</h1>
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
                onKeyPress={ handleOnKeyPress }
            />
            <button
                onClick={ handleOnClick }
            >
                로그인
            </button>
            {/* <button
                onClick={ onClickSearchHandler }
            >
                비밀번호 찾기
            </button> */}
        </div>
    );
}

export default Login;