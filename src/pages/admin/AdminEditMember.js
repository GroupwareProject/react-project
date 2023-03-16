import AdminEditMemberCSS from "./AdminEditMember.module.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";

function AdminEditMember(){

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

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // const onClickEditHandler = () => {
    //     dispatch(callRegisterAPI({
    //         form: form
    //     }));

    //     alert('회원 등록을 완료하였습니다.');
    //     navigate("/admin", { replace: true })
    // }

    return(
        <>
        {/* <form action="" method="post"> */}
            <div className={ AdminEditMemberCSS.memberDiv }>
                <h2>신규사원 등록</h2>
                <table className={ AdminEditMemberCSS.memberTable }>
                    <tbody>
                    <tr>
                            <th>사번</th>
                            <td>
                                <input
                                    className={ AdminEditMemberCSS.memberInput }
                                    type="text"
                                    name="memberCode"
                                    placeholder="사번은 자동생성됩니다."
                                    onChange={ onChangeHandler }
                                    readOnly={true}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>부서</th>
                            <td>
                                <input
                                    className={ AdminEditMemberCSS.memberInput }
                                    type="text"
                                    name="deptCode"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>직급</th>
                            <td>
                                <input
                                    className={ AdminEditMemberCSS.memberInput }
                                    type="text"
                                    name="jobCode"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <input
                                    className={ AdminEditMemberCSS.memberInput }
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
                                    className={ AdminEditMemberCSS.memberInput }
                                    type="text"
                                    name="memberName"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>생년월일</th>
                            <td>
                                <input
                                    className={ AdminEditMemberCSS.memberInput }
                                    type="date"
                                    name="memberBirth"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>휴대전화</th>
                            <td>
                                <input
                                    className={ AdminEditMemberCSS.memberInput }
                                    type="text"
                                    name="memberPhone"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>
                                <input
                                    className={ AdminEditMemberCSS.memberInput }
                                    type="text"
                                    name="memberEmail"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>주소</th>
                            <td>
                                <input
                                    className={ AdminEditMemberCSS.memberInput }
                                    type="text"
                                    name="memberAddress"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>내선번호</th>
                            <td>
                                <input
                                    className={ AdminEditMemberCSS.memberInput }
                                    type="text"
                                    name="memberExtension"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>입사일</th>
                            <td>
                                <input
                                    className={ AdminEditMemberCSS.memberInput }
                                    type="date"
                                    name="memberStartDate"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>퇴사일</th>
                            <td>
                                <input
                                    className={ AdminEditMemberCSS.memberInput }
                                    type="date"
                                    name="memberEndDate"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={ AdminEditMemberCSS.buttonDiv }>
                    <button
                        className={ AdminEditMemberCSS.backBtn }
                        onClick={ () => navigate("/admin") }
                    >
                        돌아가기
                    </button>
                    
                    <button       
                        className={ AdminEditMemberCSS.saveBtn }
                        onClick = { onClickEditHandler }          
                    >
                        수정하기
                    </button>
            </div>
        </>
    );
}

export default AdminEditMember;