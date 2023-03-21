import { decodeJwt } from "../../utils/tokenUtils";
import Calendar from "../calendar/Calendar";
import MainCSS from "./Main.module.css"

function Main(){
    const token = decodeJwt(window.localStorage.getItem("accessToken"));
    console.log("token check {} ", token);
    return(
        <div className={ MainCSS.MainDiv }>
            <Calendar />
        </div>
    )
}

export default Main;