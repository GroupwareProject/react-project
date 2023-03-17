import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Login from "./pages/login/Login";
import Notice from "./pages/notice/Notice";
import NoticeWrite from "./pages/notice/NoticeWrite";
import NoticeDetail from "./pages/notice/NoticeDetail";
import Calendar from "./pages/calendar/Calendar";
import AdminMember from "./pages/admin/AdminMember";
import AdminSignUpMember from "./pages/admin/AdminSignUpMember";
import Address from "./pages/address/Address";
import Mypage from "./pages/mypage/Mypage";
import Main from "./pages/main/Main";
import AdminDetailMember from "./pages/admin/AdminDetailMember";
// import AdminTab from "./components/AdminTab";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Login />} />
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Main /> }/>
            {/* <Route path="/login" element={ <Login /> }/> */}
            {/* 공지사항 */}
            <Route path="/notice" element={ <Notice /> }/>
            <Route path="/noticeWrite" element={ <NoticeWrite /> } /> 
            <Route path="/notice/detail" element={ <NoticeDetail /> } /> 
            {/* 캘린더 */}
            <Route path="/calendar" element={ <Calendar /> }/>
            {/* Admin관리자 */}
            <Route path="/admin" element={ <AdminMember /> }/>
            <Route path="/adminSignUpMember" element={ <AdminSignUpMember /> }/>
            <Route path="/admin/detail" element={ <AdminDetailMember /> }/>
            {/* 주소록 */}
            <Route path="/address" element={ <Address /> }/>
            {/* 마이페이지 */}
            <Route path="/mypage" element={ <Mypage /> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
