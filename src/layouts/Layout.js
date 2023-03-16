import Sidebar from '../components/Sidebar';
import Header from "../components/Header";
import { Outlet } from 'react-router-dom';
import LayoutCSS from "./Layout.module.css";
import Footer from '../components/Footer';

function Layout(){
  return (
    <>
        <Header />
        <div style= { { display: 'flex' } }>
        <Sidebar />
        <main className={ LayoutCSS.contents }>
            <Outlet />
        </main>
        </div>
        <Footer />
    </>
  );
}

export default Layout;
