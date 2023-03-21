import AdminSignUpMemberCSS from "./AdminSignUpMember.module.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";

import { callRegisterAPI } from "../../apis/MemberAPICalls";

function AdminSignUpMember(){

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        memberCode: '',
        deptCode: '',
        jobCode: '',
        memberPwd: '',
        memberName: '',
        memberBirth: '',
        memberPhone: '',
        memberEmail: '',
        memberAddress: '',
        memberExtension: '',
        memberStartDate: '',
        memberEndDate: '',
        memberIsOut: '',
    })

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickRegisterHandler = () => {
        dispatch(callRegisterAPI({
            form: form
        }));

        alert('회원 등록을 완료하였습니다.');
        navigate("/admin/member", { replace: true })
    }

    return(
        <>
        {/* <form action="" method="post"> */}
            <div className={ AdminSignUpMemberCSS.memberDiv }>
                <h2>신규사원 등록</h2>
                <table className={ AdminSignUpMemberCSS.memberTable }>
                    <tbody>
                    <tr>
                            <th>사번</th>
                            <td>
                                <input
                                    className={ AdminSignUpMemberCSS.memberInput }
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
                                    className={ AdminSignUpMemberCSS.memberInput }
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
                                    className={ AdminSignUpMemberCSS.memberInput }
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
                                    className={ AdminSignUpMemberCSS.memberInput }
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
                                    className={ AdminSignUpMemberCSS.memberInput }
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
                                    className={ AdminSignUpMemberCSS.memberInput }
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
                                    className={ AdminSignUpMemberCSS.memberInput }
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
                                    className={ AdminSignUpMemberCSS.memberInput }
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
                                    className={ AdminSignUpMemberCSS.memberInput }
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
                                    className={ AdminSignUpMemberCSS.memberInput }
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
                                    className={ AdminSignUpMemberCSS.memberInput }
                                    type="date"
                                    name="memberStartDate"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        {/* <tr>
                            <th>퇴사일</th>
                            <td>
                                <input
                                    className={ AdminSignUpMemberCSS.memberInput }
                                    type="date"
                                    name="memberEndDate"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
            <div className={ AdminSignUpMemberCSS.buttonDiv }>
                    <button
                        className={ AdminSignUpMemberCSS.backBtn }
                        onClick={ () => navigate("/admin/member") }
                    >
                        돌아가기
                    </button>
                    
                    <button       
                        className={ AdminSignUpMemberCSS.saveBtn }  
                        onClick = { onClickRegisterHandler }          
                    >
                        저장하기
                    </button>
            </div>
        </>
    );
}

export default AdminSignUpMember;