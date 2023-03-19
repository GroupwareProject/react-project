import AdminWorkDetailCSS from "./AdminWorkDetail.module.css";

function AdminWork(){
    return(
        <>
            <div className={ AdminWorkDetailCSS.adminWorkDiv }>
                <h2>근태 관리</h2>
                <table className={ AdminWorkDetailCSS.adminWorkTable }>
                    <colgroup>
                        <col width="10%" />
                        <col width="10%" />
                        <col width="20%" />
                        <col width="20%" />
                        <col width="20%" />
                        <col width="20%" />
                    </colgroup>
                    <thead style={{"text-align": "center", "backgroundColor": "#E0E3DA"}}>
                        <tr>
                            <th>날짜</th>
                            <th>요일</th>
                            <th>출근시간</th>
                            <th>퇴근시간</th>
                            <th>휴계시간</th>
                            <th>총 근무시간</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {/* 값 들어가는지 확인 */}
                        <tr>
                            <td>2023/03/18</td>
                            <td>토</td>
                            <td>09:00</td>
                            <td>18:00</td>
                            <td>01:00</td>
                            <td>08:00</td>
                        </tr>
                    </tbody>            
                </table>  
            </div>
        </>
    )
}

export default AdminWork;