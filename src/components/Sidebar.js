import { FcFilledFilter, FcServices, FcPortraitMode, FcPlanner, FcTwoSmartphones, FcSms } from "react-icons/fc";
import { Link } from "react-router-dom";
import SidebarCSS from "./Sidebar.module.css";

function Sidebar() {

    return(
        <div className={ SidebarCSS.SidebarDiv }>
            <ul className={ SidebarCSS.SidebarUl }>
                <li><Link to="/notice"><FcFilledFilter /> 공지사항</Link></li>
                <li><Link to="/calendar"><FcPlanner /> 캘린더</Link></li>
                {/* <li><Link to="/messenger"><FcSms /> 메신저</Link></li> */}
                <li><Link to="/address"><FcTwoSmartphones /> 주소록</Link></li>
                <li><Link to="/mypage"><FcPortraitMode /> 마이페이지</Link></li>
                <li><Link to="/admin"><FcServices /> 관리자</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;

  