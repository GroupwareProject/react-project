import ToDoCSS from "./ToDo.module.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function ToDo(){

    const navigate = useNavigate();

    const [form, setForm] = useState({
        toDoTitle: '',
        toDoContent: '',
        toDoStartDate: '',
        toDoEndDate: '',
    })

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return(
        <>
             <div className={ ToDoCSS.toDoDiv }>
                <h2>일정 등록</h2>
                <table className={ ToDoCSS.toDoTable }>
                    <tbody>
                        <tr>
                            <td>
                                <input 
                                    className={ ToDoCSS.toDoInput }
                                    name="toDoTitle"
                                    placeholder="일정을 작성해주세요."
                                    type="text"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className={ ToDoCSS.toDoWriteInput }
                                    name="toDoContent"
                                    placeholder="내용을 작성해주세요."
                                    type="text"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className={ ToDoCSS.toDoInput }
                                    name="toDoStartDate"
                                    type="date"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    className={ ToDoCSS.toDoInput }
                                    name="toDoEndDate"
                                    type="date"
                                    onChange={ onChangeHandler }
                                />
                            </td>
                        </tr>
                    </tbody>                    
                </table>            
            
                <div className={ ToDoCSS.buttonDiv }>
                        <button
                            className={ ToDoCSS.backBtn }
                            onClick={ () => navigate("/calendar") }
                        >
                            돌아가기
                        </button>
                        
                        <button       
                            className={ ToDoCSS.saveBtn }
                            type="submit"       
                        >
                            등록하기
                        </button>
                </div>
            </div>
        </>
    )
}

export default ToDo;