import { useEffect, useState } from "react"

const UseAllInformationDetails=(_id)=>{
    const [singelInfoDetails,setsingelInfoDetails]=useState({})
   useEffect(()=>{
    fetch(`https://guarded-lake-94958.herokuapp.com/products/${_id}`)
    .then(res=>res.json())
    .then(data=>setsingelInfoDetails(data))
   },[_id])
    return  [singelInfoDetails,setsingelInfoDetails]
}
export default UseAllInformationDetails;