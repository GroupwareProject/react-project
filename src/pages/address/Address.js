import AddressCSS from "./Address.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

import{ callGetMembersAPI } from "../../apis/MemberAPICalls"

function Address() {

    const dispatch = useDispatch();
    const AdminMember = useSelector(state => state.memberReducer);  

    console.log('AdminMember', AdminMember); // 값이 안나옴


    useEffect(
        () => {
            dispatch(callGetMembersAPI());          
        }
        ,[]
    );

    return(
        <>
            <div className={ AddressCSS.addressDiv }>
                <h2>주소록</h2>
                <table className={ AddressCSS.addressTable }>
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
                        { Array.isArray(AdminMember) && AdminMember.map(
                            (member, memberIndex) => (
                                <tr>
                                    <td>{member.memberCode}</td>
                                    <td>{member.deptCode}</td>
                                    <td>{member.jobCode}</td>
                                    <td>{member.memberName}</td>
                                    <td>{member.memberExtension}</td>
                                    <td>{member.memberPhone}</td>
                                </tr>)
                        )}
                        {/* <tr>
                            <td>2000</td>
                            <td>운영팀</td>
                            <td>팀장</td>
                            <td>홍길동</td>
                            <td>0000</td>
                            <td>010-0000-0000</td>
                        </tr> */}
                    </tbody>     
                </table>  
            </div>
        </>
    );
}

export default Address;