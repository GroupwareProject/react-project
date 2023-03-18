import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Notice from "./pages/notice/Notice";
import NoticeWrite from "./pages/notice/NoticeWrite";
import NoticeDetail from "./pages/notice/NoticeDetail";
import Calendar from "./pages/calendar/Calendar";
import Address from "./pages/address/Address";
import Mypage from "./pages/mypage/Mypage";
import AdminMember from "./pages/admin/AdminMember";
import AdminSignUpMember from "./pages/admin/AdminSignUpMember";
import AdminDetailMember from "./pages/admin/AdminDetailMember";
// import AdminTab from "./components/AdminTab";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 기본 로그인 화면 */}
          <Route path="/login" element={ <Login /> }/>

          {/* 로그인 후 화면 */}
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Main /> }/>
            {/* 공지사항 */}
            <Route path="/notice" element={ <Notice /> }/>
            <Route path="/notice/write" element={ <NoticeWrite /> } /> 
            <Route path="/notice/detail" element={ <NoticeDetail /> } /> 
            {/* 캘린더 */}
            <Route path="/calendar" element={ <Calendar /> }/>
            {/* 주소록 */}
            <Route path="/address" element={ <Address /> }/>
            {/* 마이페이지 */}
            <Route path="/mypage" element={ <Mypage /> }/>
            {/* Admin관리자 */}
            {/* 사원관리 */}
            <Route path="/admin/member" element={ <AdminMember /> }/>
            <Route path="/admin/signup" element={ <AdminSignUpMember /> }/>
            <Route path="/admin/detail" element={ <AdminDetailMember /> }/>
            {/* 근태관리 */}
            {/* <Route path="/admin/work" element={ < /> }/> */}
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
