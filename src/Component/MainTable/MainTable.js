import React, { useEffect, useMemo, useState } from 'react';
import './MainTable.css'
import { useForm } from 'react-hook-form';
import { useTable, useGlobalFilter, useFilters } from 'react-table';
import UseAllInformation from '../../UseHooks/UseAllInformation';
import SingelInformation from './SingelInformation/SingelInformation';

const MainTable = () => {
    const [Activepage,setActivepage]=useState(0)
    const [Information,SetInformation]=useState([])
    useEffect(()=>{
        fetch(`https://apologetic-whistler-24285.herokuapp.com/api/billing-list?Activepage=${Activepage}`)
       .then(res=>res.json())
       .then(data=>SetInformation(data))
      },[Activepage])

    const [pageCount,setpageCount]=useState([])
    
    
    useEffect(()=>{
      fetch(`https://apologetic-whistler-24285.herokuapp.com/dataCount`)
     .then(res=>res.json())
     .then(data=>{
        const Count= data.allData
              const pages=Math.ceil(Count/10)
              setpageCount(pages)
    })
    },[])

   
    const { register, formState: { errors,isSubmitting },reset, handleSubmit } = useForm();
    const onSubmit= (data)=>{
     
      console.log(data);
      fetch(`https://apologetic-whistler-24285.herokuapp.com/api/billing-list`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data) 
    
        })
        .then(res=>res.json())
       .then(data=>{
        alert('added succesfully')
       
      console.log('Success:', data);})
      reset()
     
             }
          
          
    return (
     <div>
        <div className=' w-full flex justify-between container '>
            <div className='flex ml-2 mb-1 '>
                <h1 className='text-bold text-2xl mr-5'>Billings</h1>
                <input type="text" 
                   placeholder={"Search name"} className="input input-bordered" />
            </div>
            <div>
            <label htmlFor="my-modal-3" className="btn modal-button">Add New Bill</label>
            {/* for modal======== */}
           <input type="checkbox" id="my-modal-3" className="modal-toggle" />
     <div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    
       <div className="form-control w-50 flex justify-center max-w-xs">



{/* ============ FORM start===================== */}
<form onSubmit={handleSubmit(onSubmit)}>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Name</span>
    </label>
    <input
        type="text"
        placeholder="Your Full Name"
        className="input input-bordered w-full max-w-xs"
        {...register("FullName", {
            required: {
                value: true,
                message: 'Name is Required'
            }
        })}
    />
    <label className="label">
        {errors.FullName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.FullName.message}</span>}
    </label>
</div>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Email</span>
    </label>
    <input
        type="email"
        placeholder="Your Email"
        className="input input-bordered w-full max-w-xs"
        {...register("Email", {
            required: {
                value: true,
                message: 'Email is Required'
            },
            pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid Email'
            }
        })}
    />
    <label className="label">
        {errors.Email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Email.message}</span>}
        {errors.Email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.Email.message}</span>}
    </label>
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Phone Number</span>
    </label>
    <input
        type="Number"
        placeholder="Phone Number"
        className="input input-bordered w-full max-w-xs"
        {...register("Phone", {
            required: {
                value: true,
                message: 'Phone Number is Required'
            },
            minLength: {
                value:11,
                message:'Must be in 11 characters'
            }
        })}
    />
    <label className="label">
        {errors.Phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Phone.message}</span>}
        {errors.Phone?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.Phone.message}</span>}
    </label>
    <label className="label">
        <span className="label-text">Amount</span>
    </label>
    <input
        type="Number"
        placeholder="Amount you want pay"
        className="input input-bordered w-full max-w-xs"
        {...register("PaidAmmount", {
            required: {
                value: true,
                message: 'Amount is Required'
            }
        })}
    />
    <label className="label">
        {errors.PaidAmmount?.type === 'required' && <span className="label-text-alt text-red-500">{errors.PaidAmmount.message}</span>}
       
    </label>
</div>


<input className='btn w-full max-w-xs text-white' type="submit" value="ADD NOW" />
</form>

 
{/* ==============form end=================== */}

</div>

      

  </div>
</div>
            {/* for modal======== */}
            </div>
        </div>
           <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
   
    <thead>
      <tr>
        <th>Billing ID</th>
        <th>FullName</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Piad Ammount</th>
        <th className='text-center'>Action</th>
  </tr>
    </thead>
   
    {
        Information.slice(0,10).map((singelinfo,index)=><SingelInformation
            singelinfo={singelinfo}
            key={singelinfo._id}
            index={index}
        ></SingelInformation>)
    }
      
     
      
    
  </table>

</div>
<div className='pagination'>

    {
        [...Array(pageCount).keys()].map(number=>
              <button
              className={Activepage=== number ?'selected':''}
            onClick={()=>setActivepage(number)}
            >{number}</button>)
    }

</div>
     </div>
    );
};

export default MainTable;