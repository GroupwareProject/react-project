import NoticeDetailCSS from "./NoticeDetail.module.css";
import { useNavigate, useParams } from 'react-router-dom';
import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decodeJwt } from '../../utils/tokenUtils';


import { 
    callNoticeDetailAPI, 
    callNoticeUpdateAPI, 
    callNoticeDeleteAPI, 
    callNoticeListAPI 
} from "../../apis/NoticeAPICalls";

function NoticeDetail() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const notice = useSelector(state => state.noticeReducer);
    const noticeDetail = notice.data;
    const token = decodeJwt(window.localStorage.getItem("accessToken"));


    const [form, setForm] = useState({});
    const [modifyMode, setModifyMode] = useState(false);
    
    // 한 개의 값을 불러오는
    useEffect(
        () => {

            if(token !== null) {
                dispatch(callNoticeDetailAPI({
                    noticeNo: params.noticeNo
                }))
            }
        }, []
    );

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickEditModeHandler = () => {

        setModifyMode(true);
        setForm({
            noticeTitle: noticeDetail.noticeTitle,
            noticeContent: noticeDetail.noticeContent 
        })
    };

    const onClickUpdateHandler = () => {

        const formData = new FormData();
        formData.append("noticeTitle", noticeDetail.noticeTitle);
        formData.append("noticeContent", noticeDetail.noticeContent);

        dispatch(callNoticeUpdateAPI({
            form: formData
        }))
        // navigate("/notice", {replace: true});
        // window.location.reload();

        // const onClickDeleteHandler = (noticeNo) => {
        //     if (window.confirm('삭제 하시겠습니까>')) {
        //         dispatch(callNoticeDeleteAPI({
        //             noticeNo
        //         }))
        //     }
        // }

    }

    return(
        <form>
        {/* <form action="" method="post"> */}
            { noticeDetail &&
            <div className={ NoticeDetailCSS.noticeWriteDiv }>
                <h2>공지사항 수정/삭제하기</h2>
                <table className={ NoticeDetailCSS.noticeWriteTable }>
                    <tbody>
                        <tr>
                            <td>
                                <input 
                                    className={ NoticeDetailCSS.noticeWriteInput }
                                    name="noticeTitle"
                                    placeholder="제목을 작성해주세요."
                                    type="text"
                                    onChange={ onChangeHandler }
                                    style={ modifyMode ? {backgroundColor: 'gray'} : null}
                                    value={ (!modifyMode ? noticeDetail.noticeTitle : form.noticeTitle) || '' }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <textarea
                                    className={ NoticeDetailCSS.contentTextArea }
                                    name="noticeContent"
                                    placeholder="내용을 작성해주세요."
                                    onChange={ onChangeHandler }
                                    style={ modifyMode ? {backgroundColor: 'gray'} : null}
                                    value={ (!modifyMode ? noticeDetail.noticeContent : form.noticeContent) || '' }
                                >                                    
                                </textarea>
                            </td>
                        </tr>
                        {/* <tr>
                            <td>
                                <input
                                    className={ NoticeDetailCSS.noticeWriteInput }
                                    type="file"
                                    name="noticeFile"
                                    onChange={ changeFileHandler }
                                />
                            </td>
                        </tr> */}
                    </tbody>                    
                </table>            
                <div className={ NoticeDetailCSS.buttonDiv }>
                        <button
                            className={ NoticeDetailCSS.backBtn }
                            onClick={ () => navigate("/notice") }
                        >
                            돌아가기
                        </button>
                        
                        {!modifyMode &&
                        <button
                            className={ NoticeDetailCSS.editBtn }
                            onClick={ onClickEditModeHandler }
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
                            className={ NoticeDetailCSS.deleteBtn }
                            // onClick={ onClickDeleteHandler }       
                        >
                            삭제하기
                        </button>
                </div>
            </div>
            }
        </form>
    );
}

export default NoticeDetail;