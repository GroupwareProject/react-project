import BoardWriteCSS from "./BoardWrite.module.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";

import { 
    callBoardInsertAPI 
} from "../../apis/BoardAPICalls";

function BoardWrite() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        boardTitle: '',
        boardContent: ''
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickRegisterHandler = () => {
        dispatch(callBoardInsertAPI({
            form: form
        }));
        
        alert('게시글 등록을 완료하였습니다.');
        // navigate("/board", { replace: true })
    }


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
                                    name="boardTitle"
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
                                    name="boardContent"
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
                            onClick={ () => navigate("/board") }
                        >
                            돌아가기
                        </button>
                        
                        <button       
                            className={ BoardWriteCSS.saveBtn }
                            onClick = { onClickRegisterHandler }       
                        >
                            저장하기
                        </button>
                </div>
            </div>
        </form>
    );
}

export default BoardWrite;