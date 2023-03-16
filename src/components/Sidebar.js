import { FcFilledFilter, FcServices, FcPortraitMode, FcPlanner, FcTwoSmartphones, FcSms } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import SidebarCSS from "./Sidebar.module.css";

function Sidebar() {

    // const navigate = useNavigate();

    // const onClickLogoHandler = () => {
    //     navigate("/", { replace: true })
    // }

    return(
        <div className={ SidebarCSS.SidebarDiv }>
            {/* <button
                    className={ SidebarCSS.LogoBtn }
                    onClick={ onClickLogoHandler }
                >
                    GROUPWARE
            </button> */}
            <ul className={ SidebarCSS.SidebarUl }>
                <li><Link to="/notice"><FcFilledFilter /> 공지사항</Link></li>
                <li><Link to="/calendar"><FcPlanner /> 캘린더</Link></li>
                {/* <li><Link to="/messenger"><FcSms /> 메신저</Link></li> */}
                <li><Link to="/address"><FcTwoSmartphones /> 주소록</Link></li>
                <li><Link to="/myPage"><FcPortraitMode /> 마이페이지</Link></li>
                <li><Link to="/admin"><FcServices /> 관리자</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;

  