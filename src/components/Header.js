import { Link, useNavigate } from "react-router-dom";
import { FcBusinessman } from "react-icons/fc";
import HeaderCSS from "./Header.module.css";


function Header(){

    const navigate = useNavigate();

    const onClickLogoHandler = () => {
        navigate("/", { replace: true })
    }

    // const dispatch = useDispatch();

    // const onClickLogoutHandler = () => {
    //     window.localStorage.removeItem('accessToken');  
    //     dispatch(callLogoutAPI());
        
    //     alert('로그아웃이 되어 메인화면으로 이동합니다.');
    //     navigate("/", { replace: true })
    //     window.location.reload();
    // }

    // function BeforeLogin() {

    //     return (
    //         <div>
    //             <Link to="/login">로그인</Link>
    //         </div>
    //     );
    // }

    // function AfterLogin() {

    //     return (            
    //         <div>
    //             <button className={ HeaderCSS.HeaderBtn } onClick={ onClickLogoutHandler }>로그아웃</button>
    //         </div>
    //     );
    // }

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

            <ul className={ HeaderCSS.LoginUl }>
                <Link to="/login"><FcBusinessman color="black" /> 로그인</Link>
            </ul>

            {/* { (isLogin == null || isLogin === undefined) ? <BeforeLogin /> : <AfterLogin />} */}
        </div>
    </>
    );
}

export default Header;