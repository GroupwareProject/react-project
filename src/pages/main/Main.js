import Calendar from "../calendar/Calendar";
import MainCSS from "./Main.module.css"

function Main(){

    return(
        <div className={ MainCSS.MainDiv }>
            <Calendar />
        </div>
    )
}

export default Main;