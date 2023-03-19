import { useNavigate } from "react-router-dom";
import BoardCSS from "./Board.module.css";

function Board() {

    const navigate = useNavigate();

    // 공지사항 글쓰기 버튼
    const onClickWriteHandler = () => {
       navigate("/board/write");
    }

    // 회원 정보 클릭 시, 수정페이지로 이동
    // const onClickTableTr = (boardNo) => {
    //     navigate(`/board/detail/${boardNo}`, { replace: false });
    // }

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
                        {/* { Array.isArray(boardList) && boardList.map(
                            (boardList) => (
                                <tr
                                    key={ boardList.boardNo }
                                    onClick={ () => onClickTableTr(boardList.boardNo) }
                                >
                                    <td>{boardList.boardNo}</td>
                                    <td>{boardList.boardTitle}</td>
                                    <td>{boardList.boardDate}</td>
                                    <td>{boardList.boardViews}</td>
                                </tr>)
                        )} */}
                    </tbody>            
                </table>  
            </div>
        </>
    );
}

export default Board;