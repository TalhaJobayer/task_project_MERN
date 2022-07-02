import { useEffect, useState } from "react"

const UseAllInformation=()=>{
    const [Information,SetInformation]=useState([])
    
    useEffect(()=>{
        fetch(`https://apologetic-whistler-24285.herokuapp.com/api/billing-list`)
       .then(res=>res.json())
       .then(data=>SetInformation(data))
      },[])
    return  [Information,SetInformation]
}
export default UseAllInformation;