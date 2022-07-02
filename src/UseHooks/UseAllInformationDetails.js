import { useEffect, useState } from "react"

const UseAllInformationDetails=(id)=>{
    const [singelInfoDetails,setsingelInfoDetails]=useState({})
   useEffect(()=>{
    fetch(`https://apologetic-whistler-24285.herokuapp.com/api/billing-list/${id}`)
    .then(res=>res.json())
    .then(data=>setsingelInfoDetails(data))
   },[id])
    return  [singelInfoDetails,setsingelInfoDetails]
}
export default UseAllInformationDetails;