import { useState,useEffect } from "react"
const useApiCall = (url) =>{
    const [user,setUser] = useState([])
    useEffect(()=>{

        fetch(url)
        .then(res =>res.json())
        .then((data)=>{
       
        setUser(data)
       
        })
       
       
       
       },[url])

       return user


}


export default useApiCall