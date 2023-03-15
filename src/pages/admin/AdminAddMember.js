import AdminAddMemberCSS from "./AdminAddMember.module.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function AdminAddMember(){

    const navigate = useNavigate();

    const [form, setForm] = useState({
        memberName: '',

    })

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return(
        <form>
        {/* <form action="" method="post"> */}
            <div className={ AdminAddMemberCSS.memberDiv }>
                <h2>신규사원 등록</h2>
                {/* 개인정보 */}
                <table className={ AdminAddMemberCSS.memberTable }>
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input
                                    className={ AdminAddMemberCSS.memberInput }
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
                                    className={ AdminAddMemberCSS.memberInput }
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
                                    className={ AdminAddMemberCSS.memberInput }
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
                                    className={ AdminAddMemberCSS.memberInput }
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
                                    className={ AdminAddMemberCSS.memberInput }
                                    type="text"
                                    name="memberAddress"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        {/* 회사정보 */}
                        <tr>
                            <th>사번</th>
                            <td>
                                <input
                                    className={ AdminAddMemberCSS.memberInput }
                                    type="text"
                                    name="memberCode"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>부서</th>
                            <td>
                                <input
                                    className={ AdminAddMemberCSS.memberInput }
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
                                    className={ AdminAddMemberCSS.memberInput }
                                    type="text"
                                    name="jobCode"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>내선번호</th>
                            <td>
                                <input
                                    className={ AdminAddMemberCSS.memberInput }
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
                                    className={ AdminAddMemberCSS.memberInput }
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
                                    className={ AdminAddMemberCSS.memberInput }
                                    type="date"
                                    name="memberEndDate"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={ AdminAddMemberCSS.buttonDiv }>
                    <button
                        className={ AdminAddMemberCSS.backBtn }
                        onClick={ () => navigate("/admin") }
                    >
                        돌아가기
                    </button>
                    
                    <button       
                        className={ AdminAddMemberCSS.saveBtn }
                        type="submit"              
                    >
                        저장하기
                    </button>
            </div>
        </form>
    );
}

export default AdminAddMember;