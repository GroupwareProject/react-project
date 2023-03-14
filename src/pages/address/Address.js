import AddressCSS from "./Address.module.css";

function Address() {

    return(
        <>
            <div className={ AddressCSS.addressDiv }>
                <h2>주소록</h2>
                <table className={ AddressCSS.addressTable }>
                    <colgroup>
                        <col width="15%" />
                        <col width="15%" />
                        <col width="20%" />
                        <col width="25%" />
                        <col width="25%" />
                    </colgroup>
                    <thead style={{"text-align": "center", "backgroundColor": "#E0E3DA"}}>
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

export default Address;