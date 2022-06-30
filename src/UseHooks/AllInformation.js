import { useEffect, useState } from "react"

const UseAllInformation=()=>{
    const [Information,SetInformation]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/api/billing-list`)
       .then(res=>res.json())
       .then(data=>SetInformation(data))
      },[])
    return  [Information,SetInformation]
}
export default UseAllInformation;