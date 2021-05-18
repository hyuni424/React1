import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList(){    
    /*    
    const [days,setDays] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/days")
        .then(res=>{
            return res.json();
        }).then(data=>{
            setDays(data);
        });
    }, []);
    */
   // return 된 data 는 days
   const days = useFetch("http://localhost:3001/days");

    return (
        <div>
        <ul className="list_day">
            {days.map(day=>(
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
        </div>
    )
};