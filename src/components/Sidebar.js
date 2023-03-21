import { FcFilledFilter, FcServices, FcPortraitMode, FcPlanner, FcTwoSmartphones, FcSms } from "react-icons/fc";
import { Link } from "react-router-dom";
import SidebarCSS from "./Sidebar.module.css";

function Sidebar() {

    return(
        <div className={ SidebarCSS.SidebarDiv }>
            <ul className={ SidebarCSS.SidebarUl }>
                <li><Link to="/notice"><FcFilledFilter /> 공지사항</Link></li>
                <li><Link to="/notice/detail"> [확인용]공지사항 수정</Link></li>
                <li><Link to="/board"><FcFilledFilter /> 게시판</Link></li>
                <li><Link to="/board/detail"> [확인용]게시판 수정</Link></li>
                <li><Link to="/calendar"><FcPlanner /> 캘린더</Link></li>
                <li><Link to="/address"><FcTwoSmartphones /> 주소록</Link></li>
                <li><Link to="/mypage/member"><FcPortraitMode /> 마이페이지</Link></li>
                <li><Link to="/admin/member"><FcServices /> 사원관리</Link></li>

                {/* 보류 */}
                {/* <li><Link to="/messenger"><FcSms /> 메신저</Link></li> */}
                {/* <li><Link to="/mypage/work"><FcPortraitMode /> 나의 근태</Link></li> */}
                {/* <li><Link to="/admin/work"><FcServices /> 근태관리</Link></li> */}
                {/* <li><Link to="/admin/work/detail"> [확인용]근태관리</Link></li> */}
                {/* <li><Link to="/admin/member/detail"> [확인용]사원관리 수정</Link></li> */}
            </ul>
        </div>
    );
}

export default Sidebar;

  