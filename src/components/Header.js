import { Link, useNavigate } from "react-router-dom";
import { FcBusinessman } from "react-icons/fc";
import HeaderCSS from "./Header.module.css";
import { useDispatch } from "react-redux";

import { callLogoutAPI } from "../apis/MemberAPICalls";

function Header(){

    const navigate = useNavigate();

    const dispatch = useDispatch();
    
    const isLogin = window.localStorage.getItem('accessToken'); 

    const onClickLogoHandler = () => {
        navigate("/", { replace: true })
    }

    const onClickLogoutHandler = () => {
        window.localStorage.removeItem('accessToken');  
        dispatch(callLogoutAPI());
        
        alert('로그아웃이 되어 메인화면으로 이동합니다.');
        navigate("/login", { replace: true })
        window.location.reload();
    }

    // function BeforeLogin() {

    //     return (
    //         <div>
    //             <Link to="/login"><FcBusinessman />로그인</Link>
    //         </div>
    //     );
    // }

    function AfterLogin() {

        return (            
            <div>
                <FcBusinessman /> | <button className={ HeaderCSS.HeaderBtn } onClick={ onClickLogoutHandler }>로그아웃</button>
            </div>
        );
    }

    return(
        <>
        {/* { loginModal ? <LoginModal setLoginModal={ setLoginModal }/> : null} */}
        <div className={ HeaderCSS.HeaderDiv }>
            <button
                    className={ HeaderCSS.LogoBtn }
                    onClick={ onClickLogoHandler }
                >
                    GROUPWARE
            </button>
            
            { <AfterLogin /> }
            {/* { (isLogin == null || isLogin === undefined) ? <BeforeLogin /> : <AfterLogin />} */}
        </div>
    </>
    );
}

export default Header;