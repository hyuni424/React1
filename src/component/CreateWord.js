import { useRef } from "react";
import { useHistory } from "react-router";
import useFetch from "../hooks/useFetch"

export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days");

    // 작성후 그 곳으로 이동
    const histroy = useHistory();

    function onSubmit(e){
        e.preventDefault();
        // current를 작성하면 접근가능
        /*        
        console.log(engRef.current.value);
        console.log(korRef.current.value);
        console.log(dayRef.current.value);
        */
        
        fetch(`http://localhost:3001/words/`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            day : dayRef.current.value,
            eng : engRef.current.value,
            kor : korRef.current.value,
            isDone : false
            }),
        }).then(res => {
            if (res.ok) {
            alert("생성이 완료 되었습니다.");
            histroy.push(`/day/${dayRef.current.value}`);
            }
        });       
    }    

    //useRef 는 Dom에 접근가능
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);   

    return(
        <form>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day=>(
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={onSubmit}>저장</button>
        </form>
    )
}