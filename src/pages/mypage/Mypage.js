import MypageCSS from "./Mypage.module.css";

function Mypage(){
    return(
        <>
            <div className={ MypageCSS.memberDiv }>
                <h2>마이페이지</h2>
                {/* 개인정보 */}
                <table className={ MypageCSS.memberTable }>
                    <tbody>
                        <div className={ MypageCSS.memberInfo }>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input
                                    className={ MypageCSS.memberInput }
                                    type="text"
                                    name="memberName"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>생년월일</th>
                            <td>
                                <input
                                    className={ MypageCSS.memberInput }
                                    type="date"
                                    name="memberBirth"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>휴대폰번호</th>
                            <td>
                                <input
                                    className={ MypageCSS.memberInput }
                                    type="text"
                                    name="memberPhone"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>
                                <input
                                    className={ MypageCSS.memberInput }
                                    type="text"
                                    name="memberEmail"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>주소</th>
                            <td>
                                <input
                                    className={ MypageCSS.memberInput }
                                    type="text"
                                    name="memberAddress"
                                />
                            </td>
                        </tr>
                        </div>
                        {/* 회사정보 */}
                        <div className={ MypageCSS.companyInfo }>
                        <tr>
                            <th>사번</th>
                            <td>
                                <input
                                    className={ MypageCSS.memberInput }
                                    type="text"
                                    name="memberCode"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>부서</th>
                            <td>
                                <input
                                    className={ MypageCSS.memberInput }
                                    type="text"
                                    name="deptCode"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>직급</th>
                            <td>
                                <input
                                    className={ MypageCSS.memberInput }
                                    type="text"
                                    name="jobCode"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>내선번호</th>
                            <td>
                                <input
                                    className={ MypageCSS.memberInput }
                                    type="text"
                                    name="memberExtension"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>입사일</th>
                            <td>
                                <input
                                    className={ MypageCSS.memberInput }
                                    type="date"
                                    name="memberStartDate"
                                />
                            </td>
                        </tr>
                        </div>
                    </tbody>
                </table>
            </div>
            <div className={ MypageCSS.buttonDiv }>
                    <button       
                        className={ MypageCSS.saveBtn }
                        // type="submit"              
                    >
                        수정하기
                    </button>
            </div>
        </>
    );
}

export default Mypage;