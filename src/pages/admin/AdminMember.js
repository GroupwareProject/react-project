import { useNavigate } from "react-router-dom";
import AdminMemberCSS from "./AdminMember.module.css";

function AddminMember(){

    const navigate = useNavigate();

    const onClickAddHandler = () => {
       navigate("/adminSignUpMember");
    }

    return(
        <>
            <div className={ AdminMemberCSS.memberDiv }>
                {/* <ul className={ EmployeeManagementCSS.employeeUl }>
                    <h1>사원관리</h1>
                    <h1>근태관리</h1>
                </ul> */}
                <h2>사원관리</h2>
                <div className={ AdminMemberCSS.memberAddBtn }>
                    <button onClick={ onClickAddHandler }>
                        신규사원 등록
                    </button>
                </div>
                <table className={ AdminMemberCSS.memberTable }>
                    <colgroup>
                        <col width="10%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="20%" />
                        <col width="25%" />
                        <col width="25%" />
                    </colgroup>
                    <thead style={{"text-align": "center", "backgroundColor": "#E0E3DA"}}>
                        <tr>
                            <th>사번</th>
                            <th>부서</th>
                            <th>직급</th>
                            <th>이름</th>
                            <th>내선번호</th>
                            <th>휴대전화</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr>
                            <td>2000</td>
                            <td>인사팀</td>
                            <td>사장</td>
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

export default AddminMember;