import { FcFilledFilter, FcServices, FcPortraitMode, FcPlanner, FcViewDetails } from "react-icons/fc";
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
                <li><Link to="/notice"><FcFilledFilter color="black" /> 공지사항</Link></li>
                <li><Link to="/calendar"><FcPlanner color="black" /> 캘린더</Link></li>
                <li><Link to="/myPage"><FcPortraitMode color="black" /> 마이페이지</Link></li>
                <li><Link to="/admin"><FcServices color="black" /> 관리자</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;

  