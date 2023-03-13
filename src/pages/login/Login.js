import LoginCSS from './Login.module.css';
import { useState } from "react";
import { useDispatch } from 'react-redux';

function Login(){

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        memberId: '',
        memberPassword: ''
    });
    
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    
    const onClickLoginHandler = () => {

        alert('로그인이 완료되었습니다.');
        window.location.reload();
    }

    return(
        <div className={ LoginCSS.logindiv }>
            <h1>로그인</h1>
            <input
                type="text"
                name="employeeCode"
                placeholder="사번 입력"
                autoComplete="off"
                onChange={ onChangeHandler }
                autoFocus="autofocus"
            />
            <input
                type="password"
                name="employeePwd"
                placeholder="비밀번호 입력"
                autoComplete="off"
                onChange={ onChangeHandler }
            />
            <button
                onClick={ onClickLoginHandler }
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