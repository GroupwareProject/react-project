import WorkCSS from "./Work.module.css";
import moment from "moment";
import 'moment/locale/ko';

function Work(){

    const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
    console.log(nowTime);

    return(
        <>
            <div>
                <div className={ WorkCSS.timeDiv }>
                    <moment>{nowTime}</moment>
                </div>
                    <button className={ WorkCSS.buttonDiv }
                        // onClick={ onClickStartTime }
                    >
                        출근
                    </button>
                    <button className={ WorkCSS.buttonDiv }
                        // onClick={ onClickEndTime }
                    >
                        퇴근
                    </button>

            </div>
            <div className={ WorkCSS.workDiv }>
                <h2>나의 근태</h2>
                <table className={ WorkCSS.workTable }>
                    <colgroup>
                        <col width="10%" />
                        <col width="10%" />
                        <col width="20%" />
                        <col width="20%" />
                        <col width="20%" />
                        <col width="20%" />
                    </colgroup>
                    <thead style={{"text-align": "center", "backgroundColor": "#E0E3DA"}}>
                        <tr>
                            <th>날짜</th>
                            <th>요일</th>
                            <th>출근시간</th>
                            <th>퇴근시간</th>
                            <th>휴계시간</th>
                            <th>총 근무시간</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {/* 값 들어가는지 확인 */}
                        <tr>
                            <td>2023/03/18</td>
                            <td>토</td>
                            <td>09:00</td>
                            <td>18:00</td>
                            <td>01:00</td>
                            <td>08:00</td>
                        </tr>
                    </tbody>            
                </table>  
            </div>
        </>
    )
}

export default Work;