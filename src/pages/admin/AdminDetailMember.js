import AdminDetailMemberCSS from "./AdminDetailMember.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { decodeJwt } from '../../utils/tokenUtils';
import moment from 'moment';

import { 
    callGetMemberAPI, 
    callGetMemberUpdateAPI,
    callDeleteMemberAPI
} from "../../apis/MemberAPICalls";

function AdminDetailMember(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const member = useSelector(state => state.memberReducer); 
    const memberDetail = member.data;
    const token = decodeJwt(window.localStorage.getItem("accessToken"));   

    console.log('memberDetail', memberDetail)

    const [modifyMode, setModifyMode] = useState(false);
    const [form, setForm] = useState({});
    
    useEffect(
        () => {    
            console.log('memberCode : ',params.memberCode);

            if(token !== null) {
                dispatch(callGetMemberAPI({
                    memberCode: params.memberCode
                }));            
            }
        }
        ,[]
    );

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // 수정모드
    const onClickEditModeHandler = () => {
        setModifyMode(true);
        setForm({
            memberPwd: memberDetail.memberPwd,
            memberPhone: memberDetail.memberPhone,
            memberEmail: memberDetail.memberEmail,
            memberAddress: memberDetail.memberAddress,
            memberEndDate: memberDetail.memberEndDate
        })
    }

    // 수정완료 버튼
    const onClickUpdateHandler = () => {
        
        const formData = new FormData();
        formData.append("memberCode", memberDetail.memberCode);
        formData.append("memberName", memberDetail.memberName);
        formData.append("memberBirth", memberDetail.memberBirth);
        formData.append("memberExtension", memberDetail.memberExtension);
        formData.append("memberStartDate", memberDetail.memberStartDate);

        formData.append("deptCode", memberDetail.deptCode);
        formData.append("jobCode", memberDetail.jobCode);
        formData.append("memberPwd", form.memberPwd);
        formData.append("memberPhone", form.memberPhone);
        formData.append("memberEmail", form.memberEmail);
        formData.append("memberAddress", form.memberAddress);
        if(form.memberEndDate !== null){

            formData.append("memberEndDate", form.memberEndDate);
        }
    
        dispatch(callGetMemberUpdateAPI({
            form: formData
        }));
        // 경로
        navigate("/admin/member", {replace: true});
        window.location.reload();
    }

    // 삭제 버튼
    
    const onClickDeleteHandler = (memberCode) => {
        console.log(`memberCode========================` + memberCode);

        if (window.confirm('삭제 하시겠습니까?')) {
            dispatch(callDeleteMemberAPI({
                memberCode
            }));
        }
        
        // alert('회원 삭제를 완료하였습니다.');
        // 경로
        // navigate("/admin/member", {replace: true});
        // window.location.reload();
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
                                    readOnly={ true }
                                    value={ memberDetail.memberCode || '' }
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
                                    readOnly={ true }
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
                                    readOnly={ true }
                                    value={ memberDetail.jobCode || ''}
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
                                    style={ modifyMode ? {backgroundColor: 'gray'} : null}
                                    value= { (!modifyMode ? memberDetail.memberPwd : form.memberPwd) || '' }
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
                                    readOnly={ true }
                                    value={ memberDetail.memberName || ''}
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
                                    readOnly={ true }
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
                                    style={ modifyMode ? {backgroundColor: 'gray'} : null}
                                    value={ (!modifyMode ? memberDetail.memberPhone : form.memberPhone) || ''}
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
                                    style={ modifyMode ? {backgroundColor: 'gray'} : null}
                                    value={ (!modifyMode ? memberDetail.memberEmail : form.memberEmail) || ''}
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
                                    style={ modifyMode ? {backgroundColor: 'gray'} : null}
                                    value={ (!modifyMode ? memberDetail.memberAddress : form.memberAddress) || ''}
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
                                    readOnly={ true }
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
                                    readOnly={ true }
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
                                    style={ modifyMode ? {backgroundColor: 'gray'} : null}
                                    value={ (!modifyMode ? memberDetail.memberEndDate : form.memberEndDate) || ''}
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
                    {!modifyMode &&
                        <button       
                            className={ AdminDetailMemberCSS.saveBtn }
                            onClick = { onClickEditModeHandler }          
                        >
                            수정모드
                        </button>
                    }
                    {modifyMode &&
                    <button       
                        onClick={ onClickUpdateHandler }             
                    >
                        수정 저장하기
                    </button>
                    }
                    <button       
                        className={ AdminDetailMemberCSS.deleteBtn }
                        onClick = { onClickDeleteHandler }          
                    >
                        삭제하기
                    </button>
            </div>
        </div>
    );
}

export default AdminDetailMember;