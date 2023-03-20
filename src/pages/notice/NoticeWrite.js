import NoticeWriteCSS from "./NoticeWrite.module.css";
import { useNavigate } from 'react-router-dom';
import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { dataSave } from "../../modules/NoticeModule";



function NoticeWrite() {

    const [noticeTitle, setNoticeTitle] = useState('');
    const [noticeContent, setNoticeContent] = useState('');
    const dispatch =useDispatch();


    const navigate = useNavigate();

    const onSave = () => {
        const _inputData = {
            noticeTitle: noticeTitle,
            noticeContent: noticeContent
        }

        dispatch(dataSave(_inputData))

        setNoticeTitle('')
        setNoticeContent('')


    }

    

    // const [file, setFile] = useState(null);

    const [form, setForm] = useState({});

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
            <div className={ NoticeWriteCSS.noticeWriteDiv }>
                <h2>공지사항 작성하기</h2>
                <table className={ NoticeWriteCSS.noticeWriteTable }>
                    <tbody>
                        <tr>
                            <td>
                                <input 
                                    className={ NoticeWriteCSS.noticeWriteInput }
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
                                    className={ NoticeWriteCSS.contentTextArea }
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
                                    className={ NoticeWriteCSS.noticeWriteInput }
                                    type="file"
                                    name="noticeFile"
                                    onChange={ changeFileHandler }
                                />
                            </td>
                        </tr> */}
                    </tbody>                    
                </table>            
            
                <div className={ NoticeWriteCSS.buttonDiv }>
                        <button
                            className={ NoticeWriteCSS.backBtn }
                            onClick={ () => navigate("/notice") }
                        >
                            돌아가기
                        </button>
                        
                        <button       
                            className={ NoticeWriteCSS.saveBtn }
                            type="submit"       
                        >
                            저장하기
                        </button>
                </div>
            </div>
        </form>
    );
}

export default NoticeWrite;