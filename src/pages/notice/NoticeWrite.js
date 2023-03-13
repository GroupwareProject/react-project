import NoticeDetailCSS from "./NoticeWrite.module.css";
import { useNavigate } from 'react-router-dom';

function NoticeDetail() {

    const navigate = useNavigate();

    return(
        <>
            <div className={ NoticeDetailCSS.noticeDetailDiv }>
                <h1>공지사항 글쓰기</h1>
                <table className={ NoticeDetailCSS.noticeDetailTable }>
                    <tbody>
                        <tr>
                            <th>제목</th>
                            <td>
                                <input 
                                    className={ NoticeDetailCSS.noticeDetailInput }
                                    name="noticeTitle"
                                    placeholder="제목"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <textarea
                                    name="noticeContent"
                                    className={ NoticeDetailCSS.contentTextArea }
                                >                                    
                                </textarea>
                            </td>
                        </tr>
                    </tbody>                    
                </table>            
            </div>
            <div className={ NoticeDetailCSS.buttonDiv }>
                    <button
                        className={ NoticeDetailCSS.backBtn }
                        onClick={ () => navigate(-1) }
                    >
                        돌아가기
                    </button>
                    
                    <button       
                        className={ NoticeDetailCSS.saveBtn }
                        // onClick={ onClickChangeHandler }             
                    >
                        저장하기
                    </button>
            </div>
        </>
    );
}

export default NoticeDetail;