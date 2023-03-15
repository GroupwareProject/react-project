import { Link } from 'react-router-dom';
import AdminTabCSS from "./AdminTab.module.css";

function AdminTab(){
  return(
    <div className={ AdminTabCSS.admindiv }>
      <h2><Link to="/admin/member">직원 관리</Link></h2>
      <h2><Link to="/admin/work">근태 관리</Link></h2>
    </div>
  )
}

export default AdminTab;