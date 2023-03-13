import { useNavigate } from "react-router-dom";
import EmployeeManagementCSS from "./EmployeeManagement.module.css";

function EmployeeManagement(){

    const navigate = useNavigate();

    const onClickHandler = () => {
       navigate("/employeeRegistration");
    }

    return(
        <>
            <div className={ EmployeeManagementCSS.employeeDiv }>
                <ul className={ EmployeeManagementCSS.employeeUl }>
                    <h1>사원관리</h1>
                    <h1>근태관리</h1>
                </ul>
                <button className={ EmployeeManagementCSS.employeeBtn } onClick={ onClickHandler }>
                    신규사원 등록
                </button>
                <table className={ EmployeeManagementCSS.employeeTable }>
                    <colgroup>
                        <col width="15%" />
                        <col width="15%" />
                        <col width="20%" />
                        <col width="25%" />
                        <col width="25%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>부서</th>
                            <th>직급</th>
                            <th>이름</th>
                            <th>내선번호</th>
                            <th>휴대전화</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr>
                            <td>운영팀</td>
                            <td>팀장</td>
                            <td>홍길동</td>
                            <td>0000</td>
                            <td>010-0000-0000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default EmployeeManagement;