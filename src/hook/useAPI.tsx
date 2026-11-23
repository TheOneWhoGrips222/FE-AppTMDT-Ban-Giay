import {useEffect, useState} from "react";

export default function useAPI(url: string) {
    const [data,setData] = useState(null);
    const[loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        fetch(url).then(res => res.json())
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch((err : any) => {
                setData(null);
                setError(err.message || "Lỗi gọi API");
            })
    },[url]);
    return {data,error,loading};

}