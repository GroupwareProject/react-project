import { Outlet } from "react-router-dom";
import AdminTab from "../components/AdminTab";

function AdminLayout(){

    return(
        <>
            <div>
                <AdminTab />
                <main className="adminContent">
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default AdminLayout;