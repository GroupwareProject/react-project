import { useNavigate } from "react-router-dom";
import BoardCSS from "./Board.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

import{ callBoardListAPI } from "../../apis/BoardAPICalls"

function Board() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const boardList = useSelector(state => state.boardReducer);

    console.log('boardList', boardList);

    // 게시판 글쓰기 버튼
    const onClickWriteHandler = () => {
       navigate("/board/write");
    }

    // 회원 정보 클릭 시, 수정페이지로 이동
    const onClickTableTr = (boardNo) => {
        navigate(`/board/detail/${boardNo}`, { replace: false });
    }

    useEffect(
        () => {
            dispatch(callBoardListAPI());          
        }
        ,[]
    );

    return(
        <>
            <div className={ BoardCSS.boardDiv }>
                <h2>게시판</h2>
                <div className={ BoardCSS.buttonDiv }>
                    <button onClick={ onClickWriteHandler } >
                            글 등록
                    </button>   
                </div>  
                <table className={ BoardCSS.boardTable }>
                    <colgroup>
                        <col width="10%" />
                        <col width="60%" />
                        <col width="20%" />
                        <col width="10%" />
                    </colgroup>
                    <thead style={{"text-align": "center", "backgroundColor": "#E0E3DA"}}>
                        <tr>
                            <th>글번호</th>
                            <th>제목</th>
                            <th>등록일</th>
                            <th>조회수</th>
                        </tr>
                    </thead> 
                    <tbody>
                        { Array.isArray(boardList) && boardList.map(
                            (board) => (
                                <tr
                                    key={ board.boardNo }
                                    onClick={ () => onClickTableTr(board.boardNo) }
                                >
                                    <td>{board.boardNo}</td>
                                    <td>{board.boardTitle}</td>
                                    <td>{board.boardDate}</td>
                                    <td>{board.boardViews}</td>
                                </tr>)
                        )}

                                {/* <tr>
                                    <td>1</td>
                                    <td>제목제목제목</td>
                                    <td>2023-02-20</td>
                                    <td>10</td>
                                </tr> */}
                    </tbody>            
                </table>  
            </div>
        </>
    );
}

export default Board;