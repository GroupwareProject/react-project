import BoardDetailCSS from "./BoardDetail.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { decodeJwt } from '../../utils/tokenUtils';

import { 
    callBoardAPI, 
    callBoardUpdateAPI 
} from "../../apis/BoardAPICalls";

function BoardDetail() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const board = useSelector(state => state.boardReducer); 
    const boardDetail = board.data;
    const token = decodeJwt(window.localStorage.getItem("accessToken"));   

    console.log('boardDetail', boardDetail)

    const [modifyMode, setModifyMode] = useState(false);
    const [form, setForm] = useState({});

    useEffect(
        () => {    
            console.log('boardNo : ',params.boardNo);

            if(token !== null) {
                dispatch(callBoardAPI({
                    boardNo: params.boardNo
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
    const onClickEditHandler = () => {
        setModifyMode(true);
        setForm({
            boardTitle: boardDetail.boardTitle,
            boardContent: boardDetail.boardContent
        })
    }

    // 수정완료 버튼
    const onClickUpdateHandler = () => {
        
        const formData = new FormData();
        formData.append("boardTitle", boardDetail.boardTitle);
        formData.append("boardContent", boardDetail.boardContent);

        formData.append("boardNo", form.boardNo);
        formData.append("boardViews", form.boardViews);
        formData.append("boardViews", form.boardDate);
    
        dispatch(callBoardUpdateAPI({
            form: formData
        }));
        // 경로
        // navigate("/board", {replace: true});
        // window.location.reload();
    }

    // 삭제 버튼
    
    // const onClickDeleteHandler = (memberCode) => {
    //     console.log(`memberCode========================` + memberCode);

    //     if (window.confirm('삭제 하시겠습니까?')) {
    //         dispatch(callDeleteMemberAPI({
    //             memberCode
    //         }));
    //     }
        
        // alert('회원 삭제를 완료하였습니다.');
        // 경로
        // navigate("/admin/member", {replace: true});
        // window.location.reload();
    // }

    return(
        <form>
        {/* <form action="" method="post"> */}
            { boardDetail &&
            <div className={ BoardDetailCSS.boardWriteDiv }>
                <h2>게시판 수정/삭제하기</h2>
                <table className={ BoardDetailCSS.boardWriteTable }>
                    <tbody>
                        <tr>
                            <td>
                                <input 
                                    className={ BoardDetailCSS.boardWriteInput }
                                    name="boardTitle"
                                    placeholder="제목을 작성해주세요."
                                    type="text"
                                    onChange={ onChangeHandler }
                                    style={ modifyMode ? {backgroundColor: 'gray'} : null}
                                    value= { (!modifyMode ? boardDetail.boardTitle : form.boardTitle) || '' }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <textarea
                                    className={ BoardDetailCSS.contentTextArea }
                                    name="boardContent"
                                    placeholder="내용을 작성해주세요."
                                    onChange={ onChangeHandler }
                                    style={ modifyMode ? {backgroundColor: 'gray'} : null}
                                    value= { (!modifyMode ? boardDetail.boardContent : form.boardContent) || '' }
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
                        {!modifyMode &&
                        <button       
                            className={ BoardDetailCSS.editBtn }
                            onClick = { onClickEditHandler }          
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
                            className={ BoardDetailCSS.deleteBtn }
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

export default BoardDetail;