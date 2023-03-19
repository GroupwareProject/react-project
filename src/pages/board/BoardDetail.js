import BoardDetailCSS from "./BoardDetail.module.css";
import { useNavigate } from 'react-router-dom';
import React,{ useState } from "react";

function BoardDetail() {

    const navigate = useNavigate();

    const [form, setForm] = useState({});

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return(
        <form>
        {/* <form action="" method="post"> */}
            <div className={ BoardDetailCSS.boardWriteDiv }>
                <h2>게시판 수정/삭제하기</h2>
                <table className={ BoardDetailCSS.boardWriteTable }>
                    <tbody>
                        <tr>
                            <td>
                                <input 
                                    className={ BoardDetailCSS.boardWriteInput }
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
                                    className={ BoardDetailCSS.contentTextArea }
                                    name="noticeContent"
                                    placeholder="내용을 작성해주세요."
                                    onChange={ onChangeHandler }
                                >                                    
                                </textarea>
                            </td>
                        </tr>
                    </tbody>                    
                </table>            
            
                <div className={ BoardDetailCSS.buttonDiv }>
                        <button
                            className={ BoardDetailCSS.backBtn }
                            onClick={ () => navigate("/board") }
                        >
                            돌아가기
                        </button>
                        <button
                            className={ BoardDetailCSS.editBtn }
                            // onClick={ onClickEditHandler }
                        >
                            수정하기
                        </button>
                        
                        <button       
                            className={ BoardDetailCSS.deleteBtn }
                            // onClick={ onClickDeleteHandler }       
                        >
                            삭제하기
                        </button>
                </div>
            </div>
        </form>
    );
}

export default BoardDetail;