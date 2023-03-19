
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { callNoticeListAPI } from "../../apis/NoticeApiCalls";
import NoticeCSS from "./Notice.module.css";
// import { decodeJwt } from "../../utils/tokenUtils";

function Notice() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const noticeList = useSelector(state => state.noticeReducer);
    // const noticeList = notice.data;
    // const token = decodeJwt(window.localStorage.getItem("accessToken"))
    // const [noticeNo, setNoticeNo] = useState;

    console.log('NoticeList', noticeList);

    useEffect(
        () => {
            dispatch(callNoticeListAPI())
        }
        ,[]
    )

    // 공지사항 글쓰기 버튼
    const onClickWriteHandler = () => {
       navigate("/notice/write");
    }

    // 회원 정보 클릭 시, 수정페이지로 이동
    const onClickTableTr = (noticeNo) => {
        navigate(`/notice/detail/${noticeNo}`, { replace: false });
    }

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
                        <col width="50%" />
                        <col width="20%" />
                        <col width="10%" />
                        <col width="10%" />
                    </colgroup>
                    <thead style={{"text-align": "center", "backgroundColor": "#E0E3DA"}}>
                        <tr>
                            <th>글번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>조회수</th>
                            <th>등록일</th>
                        </tr>
                    </thead> 
                    <tbody>
                        { Array.isArray(noticeList) && noticeList.map(
                            (notice) => (
                                <tr
                                    key={ notice.noticeNo }
                                    onClick={ () => onClickTableTr(notice.noticeNo) }
                                >
                                    <td>{notice.noticeNo}</td>
                                    <td>{notice.noticeTitle}</td>
                                    <td>{notice.memberCode}</td>
                                    <td>{notice.noticeViews}</td>
                                    <td>{moment(notice.noticeDate).format("YYYY-MM-DD") || ''}</td>
                                </tr>)
                        )}

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