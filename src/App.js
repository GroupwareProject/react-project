import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Notice from "./pages/notice/Notice";
import NoticeWrite from "./pages/notice/NoticeWrite";
import Calendar from "./pages/calendar/Calendar";
import Login from "./pages/login/Login";
import EmployeeManagement from "./pages/admin/EmployeeManagement";
import EmployeeRegistration from "./pages/admin/EmployeeRegistration";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route path="/login" element={ <Login /> }/>
            <Route path="/notice" element={ <Notice /> }/>
            <Route path="/noticeWrite" element={ <NoticeWrite /> } /> 
            <Route path="/calendar" element={ <Calendar /> }/>
            <Route path="/admin" element={ <EmployeeManagement /> }/>
            <Route path="/employeeRegistration" element={ <EmployeeRegistration /> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
