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
     <div>
        <div className=' w-full flex justify-between container '>
            <div className='flex ml-2 mb-1 '>
                <h1 className='text-bold text-2xl mr-5'>Billings</h1>
                <input type="text" placeholder="Search" class="input input-bordered" />
            </div>
            <div>
            <label for="my-modal-3" class="btn modal-button">Add New Bill</label>
            {/* for modal======== */}
           


<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>
            {/* for modal======== */}
            </div>
        </div>
           <div class="overflow-x-auto">
  <table class="table table-zebra w-full">
   
    <thead>
      <tr>
        <th>ID</th>
        <th>FullName</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Piad Ammount</th>
        <th className='text-center'>Action</th>
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
     </div>
    );
};

export default MainTable;