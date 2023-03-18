import AdminDetailMemberCSS from "./AdminDetailMember.module.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";

function AdminDetailMember(){

    const navigate = useNavigate();

    // const dispatch = useDispatch();

    // const [form, setForm] = useState({
    //     memberCode: '',
    //     deptCode: '',
    //     jobCode: '',
    //     memberPwd: '',
    //     memberName: '',
    //     memberBirth: '',
    //     memberPhone: '',
    //     memberEmail: '',
    //     memberAddress: '',
    //     memberExtension: '',
    //     memberStartDate: '',
    //     memberEndDate: '',
    //     memberIsOut: '',
    // })

    // const onChangeHandler = (e) => {
    //     setForm({
    //         ...form,
    //         [e.target.name]: e.target.value
    //     });
    // };

    return(
        <div>
        {/* <form action="" method="post"> */}
            {/* { memberDetail && */}
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
                                    // onChange={ onChangeHandler }
                                    // value={ memberDetail.memberCode || ''}
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
                                    // onChange={ onChangeHandler }
                                    // value={memberDetail.deptCode || ''}
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
                                    // onChange={ onChangeHandler }
                                    // value={memberDetail.jobCode || ''}
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
                                    // onChange={ onChangeHandler }
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
                                    // onChange={ onChangeHandler }
                                    // value={memberDetail.memberName || ''}
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
                                    // onChange={ onChangeHandler }
                                    // value={moment(memberDetail.memberBirth).format("YYYY-MM-DD") || ''}
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
                                    // onChange={ onChangeHandler }
                                    // value={memberDetail.memberPhone || ''}
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
                                    // onChange={ onChangeHandler }
                                    // value={memberDetail.memberEmail || ''}
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
                                    // onChange={ onChangeHandler }
                                    // value={memberDetail.memberAddress || ''}
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
                                    // onChange={ onChangeHandler }
                                    // value={memberDetail.memberExtension || ''}
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
                                    // onChange={ onChangeHandler }
                                    // value={moment(memberDetail.memberStartDate).format("YYYY-MM-DD") || ''}
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
                                    // onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={ AdminDetailMemberCSS.buttonDiv }>
                    <button
                        className={ AdminDetailMemberCSS.backBtn }
                        onClick={ () => navigate("/admin/member") }
                    >
                        돌아가기
                    </button>
                    
                    <button       
                        className={ AdminDetailMemberCSS.saveBtn }
                        // onClick = { onClickEditHandler }          
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