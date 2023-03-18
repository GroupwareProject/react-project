import { useNavigate } from "react-router-dom";
import NoticeCSS from "./Notice.module.css";

function Notice() {

    const navigate = useNavigate();

    // 공지사항 글쓰기 버튼
    const onClickWriteHandler = () => {
       navigate("/notice/write");
    }

    // 회원 정보 클릭 시, 수정페이지로 이동
    // const onClickTableTr = (noticeNo) => {
    //     navigate(`/notice/detail/${noticeNo}`, { replace: false });
    // }

    return(
        <>
            <div className={ NoticeCSS.noticeDiv }>
                <h2>공지사항</h2>
                <div className={ NoticeCSS.buttonDiv }>
                    <button onClick={ onClickWriteHandler } >
                            글 등록
                    </button>   
                </div>  
                <table className={ NoticeCSS.noticeTable }>
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
                        {/* { Array.isArray(noticeList) && noticeList.map(
                            (noticeList) => (
                                <tr
                                    key={ noticeList.noticeNo }
                                    onClick={ () => onClickTableTr(noticeList.noticeNo) }
                                >
                                    <td>{noticeList.noticeNo}</td>
                                    <td>{noticeList.noticeTitle}</td>
                                    <td>{noticeList.noticeDate}</td>
                                    <td>{noticeList.noticeViews}</td>
                                </tr>)
                        )} */}

                        {/* 값 들어가는지 확인 */}
                        {/* <tr>
                            <td>1</td>
                            <td>공지사항 제목 테스트입니다.</td>
                            <td>2023/03/08</td>
                            <td>0</td>
                        </tr> */}
                    </tbody>            
                </table>  
            </div>
        </>
    );
}

export default Notice;