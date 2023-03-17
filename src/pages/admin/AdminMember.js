import AdminMemberCSS from "./AdminMember.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

import{ callGetMembersAPI } from "../../apis/MemberAPICalls"

function AdminMember(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const members = useSelector(state => state.memberReducer);  
    const memberList = members.data;
    console.log('AdminMember', memberList);

    // 회원등록 버튼 
    const onClickAddHandler = () => {
       navigate("/adminSignUpMember");
    }

    // 회원수정 버튼
    const onClickTableTr = (memberCode) => {
        navigate(`/adminEditMember/${memberCode}`, { replace: false });
    }

    useEffect(
        () => {
            dispatch(callGetMembersAPI());            
        }
        ,[]
    );

    return(
        <>
            <div className={ AdminMemberCSS.memberDiv }>
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
                        { Array.isArray(memberList) && memberList.map(
                            (memberList) => (
                                <tr
                                    key={ memberList.memberCode }
                                    onClick={ () => onClickTableTr(memberList.memberCode) }
                                >
                                    <td>{memberList.memberCode}</td>
                                    <td>{memberList.deptCode}</td>
                                    <td>{memberList.jobCode}</td>
                                    <td>{memberList.memberName}</td>
                                    <td>{memberList.memberExtension}</td>
                                    <td>{memberList.memberPhone}</td>
                                </tr>)
                        )}
                                {/* <tr>
                                    <td>2000</td>
                                    <td>인사팀</td>
                                    <td>사장</td>
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

export default AdminMember;