import AdminWorkCSS from "./AdminWork.module.css";

function AdminWork(){
    return(
        <>
            <div className={ AdminWorkCSS.adminWorkDiv }>
                <h2>근태 관리</h2>
                <table className={ AdminWorkCSS.adminWorkTable }>
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
                        {/* 값 들어가는지 확인 */}
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
    )
}

export default AdminWork;