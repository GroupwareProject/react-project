import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Layout from "./layouts/Layout";
import Main from "./pages/main/Main";
import Notice from "./pages/notice/Notice";
import NoticeWrite from "./pages/notice/NoticeWrite";
import NoticeDetail from "./pages/notice/NoticeDetail";
import Board from "./pages/board/Board";
import BoardWrite from "./pages/board/BoardWrite";
import BoardDetail from "./pages/board/BoardDetail";
import Calendar from "./pages/calendar/Calendar";
import Address from "./pages/address/Address";
import Mypage from "./pages/mypage/Mypage";
import AdminMember from "./pages/admin/AdminMember";
import AdminSignUpMember from "./pages/admin/AdminSignUpMember";
import AdminDetailMember from "./pages/admin/AdminDetailMember";
import ToDo from "./pages/calendar/Todo";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 기본 로그인 화면 */}
          <Route index element={<Login />}/>
          <Route path="/login" element={ <Login /> }/>

          {/* 로그인 후 화면 */}
          <Route path="/" element={ <Layout /> }>
            <Route path="/main" element={ <Main /> }/>

            {/* 공지사항 */}
            <Route path="/notice" element={ <Notice /> }/>
            <Route path="/notice/write" element={ <NoticeWrite /> } /> 
            <Route path="/notice/detail" element={ <NoticeDetail /> } /> 
            
            {/* 게시판 */}
            <Route path="/board" element={ <Board /> }/>
            <Route path="/board/write" element={ <BoardWrite /> } /> 
            <Route path="/board/detail" element={ <BoardDetail /> } /> 
            
            {/* 캘린더 */}
            <Route path="/calendar" element={ <Calendar /> }/>
            <Route path="/calendar/todo" element={ <ToDo /> }/>
            
            {/* 주소록 */}
            <Route path="/address" element={ <Address /> }/>
            
            {/* 마이페이지 */}
            <Route path="/mypage/member" element={ <Mypage /> }/>
            
            {/* Admin관리자 */}
            {/* 사원관리 */}
            <Route path="/admin/member" element={ <AdminMember /> }/>
            <Route path="/admin/member/signup" element={ <AdminSignUpMember /> }/>
            <Route path="/admin/member/detail/:memberCode" element={ <AdminDetailMember /> }/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
