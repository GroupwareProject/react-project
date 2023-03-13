import Sidebar from '../components/Sidebar';
import Header from "../components/Header";
import { Outlet } from 'react-router-dom';
import LayoutCSS from "./Layout.module.css";

function Layout(){
  return (
    <>
        <Header />
        <div style= { { display: 'flex'} }>
        <Sidebar />
        <main className={ LayoutCSS.contents }>
            <Outlet />
        </main>
        </div>
    </>
  );
}

export default Layout;
