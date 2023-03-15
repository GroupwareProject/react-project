import MypageCSS from "./Mypage.module.css";

function Mypage(){
    return(
        <>
            <div className={ MypageCSS.memberDiv }>
                <h2>나의 정보</h2>
                <table className={ MypageCSS.memberTable }>
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input
                                    className={ MypageCSS.memberInput }
                                    type="text"
                                    name="memberName"
                                    readOnly={true}
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
                                    readOnly={true}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>휴대전화</th>
                            <td>
                                <input
                                    className={ MypageCSS.memberInput }
                                    type="text"
                                    name="memberPhone"
                                    readOnly={true}
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
                                    readOnly={true}
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
                                    readOnly={true}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>사번</th>
                            <td>
                                <input
                                    className={ MypageCSS.memberInput }
                                    type="text"
                                    name="memberCode"
                                    readOnly={true}
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
                                    readOnly={true}
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
                                    readOnly={true}
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
                                    readOnly={true}
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
                                    readOnly={true}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <div className={ MypageCSS.buttonDiv }>
            <button
                        className={ MypageCSS.backBtn }
                        onClick={ () => navigate("/admin") }
                    >
                        돌아가기
                    </button>
            </div> */}
        </>
    );
}

export default Mypage;