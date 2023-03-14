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
                        <div className={ AdminAddMemberCSS.memberInfo }>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input
                                    className={ AdminAddMemberCSS.memberInput }
                                    type="text"
                                    name="memberName"
                                    placeholder="이름"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        {/* <tr>
                            <th>성별</th>
                            <td>
                                <input
                                    className={ AdminAddMemberCSS.memberInput }
                                    type="radio"
                                    name="memberGender"
                                    value="female"
                                    onChange={ onChangeHandler }
                                    checked
                                /> 남성
                                <input
                                    className={ AdminAddMemberCSS.memberInput }
                                    type="radio"
                                    name="memberGender"
                                    value="female"
                                    onChange={ onChangeHandler }
                                /> 여성
                            </td>
                        </tr> */}
                        <tr>
                            <th>생년월일</th>
                            <td>
                                <input
                                    className={ AdminAddMemberCSS.memberInput }
                                    type="date"
                                    name="memberBirth"
                                    placeholder="생년월일"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>휴대폰번호</th>
                            <td>
                                <input
                                    className={ AdminAddMemberCSS.memberInput }
                                    type="text"
                                    name="memberPhone"
                                    placeholder="휴대폰번호"
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
                                    placeholder="이메일"
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
                                    placeholder="주소"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        </div>
                        {/* 회사정보 */}
                        <div className={ AdminAddMemberCSS.companyInfo }>
                        <tr>
                            <th>사번</th>
                            <td>
                                <input
                                    className={ AdminAddMemberCSS.memberInput }
                                    type="text"
                                    name="memberCode"
                                    placeholder="사번"
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
                                    placeholder="부서"
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
                                    placeholder="직급"
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
                                    placeholder="내선번호"
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
                                    placeholder="입사일"
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
                                    placeholder="퇴사일"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        </div>
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