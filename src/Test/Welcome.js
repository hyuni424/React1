import { useState } from "react"

export default function Welcome(){
    // 1. JS -ver
    // let title = "test1";

    // 2. State -ver
    const [title,settitle]=useState(['홍welcome1', 'welcome2', '강welcome3']);

    // like 숫자 카운터, like 0으로 초기화
    const [like,likeChange] = useState(0);

    function titleChagne(){
        //document.getElementById("title").innerHTML=title;

        // state 내용 변경
        // 1. 전체 변경
        // settitle(['welcome1홍','welcome2','welcome3강']);

        // 2. 한가지 변경
        const newtitle=[...title];
        newtitle[1] = '박welcome2';
        settitle(newtitle);

        // 오름차 순
        newtitle.sort();
    }

    return (
        <div>
        <h2 /*id="title"*/>welcome_state <span>{like}%</span></h2>
        <h3>{title[0]}</h3>
        <h3>{title[1]}</h3>
        <h3>{title[2]}</h3>
        <button onClick={titleChagne}>Change</button>
        <button onClick={()=>{
            likeChange(like+1);
        }}>like up</button>
        </div>
    )
}