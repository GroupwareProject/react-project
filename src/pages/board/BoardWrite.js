import BoardWriteCSS from "./BoardWrite.module.css";
import { useNavigate } from 'react-router-dom';
import React,{ useState } from "react";

function BoardWrite() {

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
            <div className={ BoardWriteCSS.boardWriteDiv }>
                <h2>게시판 작성하기</h2>
                <table className={ BoardWriteCSS.boardWriteTable }>
                    <tbody>
                        <tr>
                            <td>
                                <input 
                                    className={ BoardWriteCSS.boardWriteInput }
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
                                    className={ BoardWriteCSS.contentTextArea }
                                    name="noticeContent"
                                    placeholder="내용을 작성해주세요."
                                    onChange={ onChangeHandler }
                                >                                    
                                </textarea>
                            </td>
                        </tr>
                    </tbody>                    
                </table>            
            
                <div className={ BoardWriteCSS.buttonDiv }>
                        <button
                            className={ BoardWriteCSS.backBtn }
                            onClick={ () => navigate("/notice") }
                        >
                            돌아가기
                        </button>
                        
                        <button       
                            className={ BoardWriteCSS.saveBtn }
                            type="submit"       
                        >
                            저장하기
                        </button>
                </div>
            </div>
        </form>
    );
}

export default BoardWrite;