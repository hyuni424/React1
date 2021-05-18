import useFetch from "../hooks/useFetch";
import { useParams } from "react-router";
import Word from './Word.js';

export default function Day(){
    //dummy 말고 API 사용해보기
    const {day} = useParams();    
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return(
    <div>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {words.map(word=>(
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
    </div>
    );
}