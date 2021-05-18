import { useEffect, useState } from "react";

//바뀌는 값을 url로 변경
export default function useFetch(url){
    const [data, setData]=useState([]);

    useEffect(()=>{
        fetch(url).then(res=>{
            return res.json();
            }
        ).then(data=>{
            setData(data);
        });
    },[url]);

    return data;
}