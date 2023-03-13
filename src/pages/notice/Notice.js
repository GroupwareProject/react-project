import { useNavigate } from "react-router-dom";
import NoticeCSS from "./Notice.module.css";

function Notice() {

    const navigate = useNavigate();

    const onClickWriteHandler = () => {
       navigate("/noticeWrite");
    }

    return(
        <>
            <div className={ NoticeCSS.noticeDiv }>
                <h1>공지사항</h1>
                <button className={ NoticeCSS.noticeWriteBtn } onClick={ onClickWriteHandler } >
                        글 등록
                </button>   
                <table className={ NoticeCSS.noticeTable }>
                    <colgroup>
                        <col width="10%" />
                        <col width="60%" />
                        <col width="20%" />
                        <col width="10%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>글번호</th>
                            <th>제목</th>
                            <th>등록일</th>
                            <th>조회수</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>공지사항 제목 테스트입니다.</td>
                            <td>2023/03/08</td>
                            <td>0</td>
                        </tr>
                    </tbody>              
                </table>            
            </div>
        {/* <table>
            <thead>
                <tr>
                    <th>글번호</th>
                    <th>제목</th>
                    <th>등록일</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>공지사항 제목 테스트입니다.</td>
                    <td>2023/03/08</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table> */}
        </>
    );
}

export default Notice;