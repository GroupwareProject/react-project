import EmployeeRegistrationCSS from "./EmployeeRegistration.module.css";
import { useNavigate } from 'react-router-dom';

function EmployeeRegistration(){

    const navigate = useNavigate();

    return(
        <>
            <div className={ EmployeeRegistrationCSS.employeeDiv }>
                <h1>신규사원 등록</h1>
                {/* 개인정보 */}
                <table className={ EmployeeRegistrationCSS.employeeTable }>
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input
                                    className={ EmployeeRegistrationCSS.employeeInput }
                                    name="employeeName"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>성별</th>
                            <td>
                                <input
                                    className={ EmployeeRegistrationCSS.employeeInput }
                                    name="employeeGender"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>생년월일</th>
                            <td>
                                <input
                                    className={ EmployeeRegistrationCSS.employeeInput }
                                    name="employeeBirthDate"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>휴대폰번호</th>
                            <td>
                                <input
                                    className={ EmployeeRegistrationCSS.employeeInput }
                                    name="employeePhone"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>
                                <input
                                    className={ EmployeeRegistrationCSS.employeeInput }
                                    name="employeeEmail"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>주소</th>
                            <td>
                                <input
                                    className={ EmployeeRegistrationCSS.employeeInput }
                                    name="employeeAddress"
                                />
                            </td>
                        </tr>
                        {/* 회사정보 */}
                        <tr>
                            <th>사번</th>
                            <td>
                                <input
                                    className={ EmployeeRegistrationCSS.employeeInput }
                                    name="employeeCode"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>부서</th>
                            <td>
                                <input
                                    className={ EmployeeRegistrationCSS.employeeInput }
                                    name="employeeDept"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>직급</th>
                            <td>
                                <input
                                    className={ EmployeeRegistrationCSS.employeeInput }
                                    name="employeePosition"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>내선번호</th>
                            <td>
                                <input
                                    className={ EmployeeRegistrationCSS.employeeInput }
                                    name="employeeExtension"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>입사일</th>
                            <td>
                                <input
                                    className={ EmployeeRegistrationCSS.employeeInput }
                                    name="employeeStartDate"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>퇴사일</th>
                            <td>
                                <input
                                    className={ EmployeeRegistrationCSS.employeeInput }
                                    name="employeeEndDate"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={ EmployeeRegistrationCSS.buttonDiv }>
                    <button
                        className={ EmployeeRegistrationCSS.backBtn }
                        onClick={ () => navigate(-1) }
                    >
                        돌아가기
                    </button>
                    
                    <button       
                        className={ EmployeeRegistrationCSS.saveBtn }
                        // onClick={ onClickChangeHandler }             
                    >
                        저장하기
                    </button>
            </div>
        </>
    );
}

export default EmployeeRegistration;