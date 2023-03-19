import AdminDetailMemberCSS from "./AdminDetailMember.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { decodeJwt } from '../../utils/tokenUtils';
import moment from 'moment';

import { callGetMemberAPI, 
    callGetMemberUpdateAPI } from "../../apis/MemberAPICalls";

function AdminDetailMember(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const member = useSelector(state => state.memberReducer); 
    const token = decodeJwt(window.localStorage.getItem("accessToken"));   
    const memberDetail = member.data;

    console.log('memberDetail', memberDetail)

    const [form, setForm] = useState({});

    useEffect(
        () => {    
            if(token !== null) {
                dispatch(callGetMemberAPI({
                    memberCode: token.sub
                }));            
            }
        }
        ,[]
    );

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
            // memberCode: memberDetail.memberCode,
            // deptCode: memberDetail.deptCode,
            // jobCode: memberDetail.jobCode,
            // memberPwd: memberDetail.memberPwd,
            // memberName: memberDetail.memberName,
            // memberBirth: memberDetail.memberBirth,
            // memberPhone: memberDetail.memberPhone,
            // memberEmail: memberDetail.memberEmail,
            // memberAddress: memberDetail.memberAddress,
            // memberExtension: memberDetail.memberExtension,
            // memberStartDate: memberDetail.memberStartDate,
            // memberEndDate: memberDetail.memberEndDate
        });
    };

    const onClickEditHandler = () => {
        
        const formData = new FormData();
        formData.append("memberCode", form.memberCode);
        formData.append("deptCode", form.deptCode);
        formData.append("jobCode", form.jobCode);
        formData.append("memberPwd", form.memberPwd);
        formData.append("memberName", form.memberName);
        formData.append("memberBirth", form.memberBirth);
        formData.append("memberPhone", form.memberPhone);
        formData.append("memberEmail", form.memberEmail);
        formData.append("memberAddress", form.memberAddress);
        formData.append("memberExtension", form.memberExtension);
        formData.append("memberStartDate", form.memberStartDate);
        formData.append("memberEndDate", form.memberEndDate);
        
        dispatch(callGetMemberUpdateAPI({
            form: formData
        }));

        navigate('/admin/member', {replace: true});
    }

    return(
        <div>
        {/* <form action="" method="post"> */}
            { memberDetail &&
            <div className={ AdminDetailMemberCSS.memberDiv }>
                <h2>회원 수정/삭제하기</h2>
                <table className={ AdminDetailMemberCSS.memberTable }>
                    <tbody>
                    <tr>
                            <th>사번</th>
                            <td>
                                <input
                                    className={ AdminDetailMemberCSS.memberInput }
                                    type="text"
                                    name="memberCode"
                                    onChange={ onChangeHandler }
                                    value={ memberDetail.memberCode || ''}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>부서</th>
                            <td>
                                <input
                                    className={ AdminDetailMemberCSS.memberInput }
                                    type="text"
                                    name="deptCode"
                                    onChange={ onChangeHandler }
                                    value={ memberDetail.deptCode || ''}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>직급</th>
                            <td>
                                <input
                                    className={ AdminDetailMemberCSS.memberInput }
                                    type="text"
                                    name="jobCode"
                                    onChange={ onChangeHandler }
                                    value={memberDetail.jobCode || ''}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <input
                                    className={ AdminDetailMemberCSS.memberInput }
                                    type="password"
                                    name="memberPwd"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input
                                    className={ AdminDetailMemberCSS.memberInput }
                                    type="text"
                                    name="memberName"
                                    onChange={ onChangeHandler }
                                    value={memberDetail.memberName || ''}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>생년월일</th>
                            <td>
                                <input
                                    className={ AdminDetailMemberCSS.memberInput }
                                    type="date"
                                    name="memberBirth"
                                    onChange={ onChangeHandler }
                                    value={moment(memberDetail.memberBirth).format("YYYY-MM-DD") || ''}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>휴대전화</th>
                            <td>
                                <input
                                    className={ AdminDetailMemberCSS.memberInput }
                                    type="text"
                                    name="memberPhone"
                                    onChange={ onChangeHandler }
                                    value={memberDetail.memberPhone || ''}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>
                                <input
                                    className={ AdminDetailMemberCSS.memberInput }
                                    type="text"
                                    name="memberEmail"
                                    onChange={ onChangeHandler }
                                    value={memberDetail.memberEmail || ''}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>주소</th>
                            <td>
                                <input
                                    className={ AdminDetailMemberCSS.memberInput }
                                    type="text"
                                    name="memberAddress"
                                    onChange={ onChangeHandler }
                                    value={memberDetail.memberAddress || ''}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>내선번호</th>
                            <td>
                                <input
                                    className={ AdminDetailMemberCSS.memberInput }
                                    type="text"
                                    name="memberExtension"
                                    onChange={ onChangeHandler }
                                    value={memberDetail.memberExtension || ''}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>입사일</th>
                            <td>
                                <input
                                    className={ AdminDetailMemberCSS.memberInput }
                                    type="date"
                                    name="memberStartDate"
                                    onChange={ onChangeHandler }
                                    value={moment(memberDetail.memberStartDate).format("YYYY-MM-DD") || ''}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>퇴사일</th>
                            <td>
                                <input
                                    className={ AdminDetailMemberCSS.memberInput }
                                    type="date"
                                    name="memberEndDate"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            }
            <div className={ AdminDetailMemberCSS.buttonDiv }>
                    <button
                        className={ AdminDetailMemberCSS.backBtn }
                        onClick={ () => navigate("/admin/member") }
                    >
                        돌아가기
                    </button>
                    
                    <button       
                        className={ AdminDetailMemberCSS.saveBtn }
                        onClick = { onClickEditHandler }          
                    >
                        수정하기
                    </button>
                    <button       
                        className={ AdminDetailMemberCSS.deleteBtn }
                        // onClick = { onClickDeleteHandler }          
                    >
                        삭제하기
                    </button>
            </div>
        </div>
    );
}

export default AdminDetailMember;