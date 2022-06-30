import React, { useEffect, useState } from 'react';
import SingelInformation from './SingelInformation/SingelInformation';

const MainTable = () => {
    const [Information,setInformation]=useState([])
    useEffect(()=>{
      fetch(`http://localhost:5000/api/billing-list`)
     .then(res=>res.json())
     .then(data=>setInformation(data))
    },[])
    return (
        <div class="overflow-x-auto">
  <table class="table table-zebra w-full">
   
    <thead>
      <tr>
        <th>ID</th>
        <th>FullName</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Piad Ammount</th>
        <th>Action</th>

      </tr>
    </thead>
   
    {
        Information.map(singelinfo=><SingelInformation
            singelinfo={singelinfo}
            key={singelinfo._id}
        ></SingelInformation>)
    }
      
     
      
    
  </table>
</div>
    );
};

export default MainTable;