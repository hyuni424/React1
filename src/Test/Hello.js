import {useState} from "react";

export default function Hello(props){
    console.log(props);
    const [name,setname] = useState('Mike');
    const [age,setage] = useState(props.age);
    const msg = age > 19  ? "성인" : "미성년자";

   function changeName(){
        setname(name === "Mike" ? "Jane" : "Mike");
        setage(age+1);
   }

    return(
        <>
            <h3>{name} ({age}) : {msg}</h3>
            <button onClick={changeName}>Change</button>            
        </>
    );
}