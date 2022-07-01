import { useEffect, useState } from "react"

const UseAllInformationDetails=(id)=>{
    const [singelInfoDetails,setsingelInfoDetails]=useState({})
   useEffect(()=>{
    fetch(`http://localhost:5000/api/billing-list/${id}`)
    .then(res=>res.json())
    .then(data=>setsingelInfoDetails(data))
   },[id])
    return  [singelInfoDetails,setsingelInfoDetails]
}
export default UseAllInformationDetails;