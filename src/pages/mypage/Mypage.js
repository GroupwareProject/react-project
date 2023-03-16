import MypageCSS from "./Mypage.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { decodeJwt } from '../../utils/tokenUtils';
import moment from 'moment';

import { callGetMemberAPI } from "../../apis/MemberAPICalls";

function Mypage(){
    
    const dispatch = useDispatch();
    const member = useSelector(state => state.memberReducer); 
    const token = decodeJwt(window.localStorage.getItem("accessToken"));   
    const memberDetail = member.data;

    useEffect(
        () => {    
            console.log('token', token.sub);
            if(token !== null) {
                dispatch(callGetMemberAPI({
                    memberCode: token.sub
                }));            
            }
        }
        ,[]
    );

    return(
        <div>
            { memberDetail &&
            <div className={ MypageCSS.memberDiv }>
                <h2>나의 정보</h2>
                <table className={ MypageCSS.memberTable }>
                    <tbody>
                    <tr>
                            <th>사번</th>
                            <td>
                                <input
                                    className={ MypageCSS.memberInput }
                                    type="text"
                                    name="memberCode"
                                    readOnly={true}
                                    value={memberDetail.memberCode || ''}
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
                                    value={memberDetail.deptCode || ''}
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
                                    value={memberDetail.jobCode || ''}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input
                                    className={ MypageCSS.memberInput }
                                    type="text"
                                    name="memberName"
                                    readOnly={true}
                                    value={memberDetail.memberName || ''}
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
                                    value={moment(memberDetail.memberBirth).format("YYYY-MM-DD") || ''}
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
                                    value={memberDetail.memberPhone || ''}
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
                                    value={memberDetail.memberEmail || ''}
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
                                    value={memberDetail.memberAddress || ''}
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
                                    value={memberDetail.memberExtension || ''}
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
                                    value={moment(memberDetail.memberStartDate).format("YYYY-MM-DD") || ''}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            }     
        </div>
    );
}

export default Mypage;