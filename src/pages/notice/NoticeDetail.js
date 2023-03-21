import NoticeDetailCSS from "./NoticeDetail.module.css";
import { useNavigate, useParams } from 'react-router-dom';
import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callNoticeDetailAPI } from "../../apis/NoticeAPICalls";

function NoticeDetail() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const notice = useSelector(state => state.noticeReducer);

    // const [file, setFile] = useState(null);
    const [form, setForm] = useState({});

    // console.log('noticeNo', params.noticeNo);

    useEffect(
        () => {
            dispatch(callNoticeDetailAPI({
                noticeNo: params.noticeNo
            }));
        }
        , [] );

    // const changeFileHandler = (e) => {
    //     setFile(e.target.files[0]);
    // }

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return(
        <form>
        {/* <form action="" method="post"> */}
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
                        <button
                            className={ NoticeDetailCSS.editBtn }
                            // onClick={ onClickEditHandler }
                        >
                            수정하기
                        </button>
                        
                        <button       
                            className={ NoticeDetailCSS.deleteBtn }
                            // onClick={ onClickDeleteHandler }       
                        >
                            삭제하기
                        </button>
                </div>
            </div>
        </form>
    );
}

export default NoticeDetail;