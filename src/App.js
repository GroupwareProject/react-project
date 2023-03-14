import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Login from "./pages/login/Login";
import Notice from "./pages/notice/Notice";
import NoticeWrite from "./pages/notice/NoticeWrite";
import NoticeDetail from "./pages/notice/NoticeDetail";
import Calendar from "./pages/calendar/Calendar";
import AddminMember from "./pages/admin/AdminMember";
import AdminAddMember from "./pages/admin/AdminAddMember";
import Address from "./pages/address/Address";
import Mypage from "./pages/mypage/Mypage";
// import AdminTab from "./components/AdminTab";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route path="/login" element={ <Login /> }/>
            {/* 공지사항 */}
            <Route path="/notice" element={ <Notice /> }/>
            <Route path="/noticeWrite" element={ <NoticeWrite /> } /> 
            <Route path="/noticeDetail" element={ <NoticeDetail /> } /> 
            {/* 캘린더 */}
            <Route path="/calendar" element={ <Calendar /> }/>
            {/* Admin관리자 */}
            <Route path="/admin" element={ <AddminMember /> }/>
            <Route path="/adminAddMember" element={ <AdminAddMember /> }/>
            {/* 주소록 */}
            <Route path="/address" element={ <Address /> }/>
            {/* 마이페이지 */}
            <Route path="/myPage" element={ <Mypage /> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
