import React, { useState } from 'react';
import UseAllInformation from '../../../UseHooks/UseAllInformation';
import { useForm } from 'react-hook-form';
import UseAllInformationDetails from '../../../UseHooks/UseAllInformationDetails';

const SingelInformation = ({ singelinfo,index}) => {
    const {_id,FullName,Email,Phone,PaidAmmount}= singelinfo
    const [Information,SetInformation]=UseAllInformation() 
     const [singelInfoDetails,setsingelInfoDetails]=useState({})

   
    
    const handleDelete=(id)=>{
      
      const procced=window.confirm('Are you sure?')
         if(procced){
            const url = `http://localhost:5000/api/billing-list/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
          
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            const remaining =Information.filter(sData => sData._id !== id);
            SetInformation(remaining);
            
             console.log('success',data)
          })
          
         }
  }
  // delete end===============================
  // update start=============
  const { register, formState: { errors },reset, handleSubmit } = useForm();
  const handleUpdate=(id)=>{
    const remaining =Information.find(sData => sData._id === id);
            
    setsingelInfoDetails(remaining)
    console.log(singelInfoDetails);
  }
  const onSubmit= (data)=>{
  
      console.log(singelInfoDetails);
   
     fetch(`http://localhost:5000/api/billing-list/${singelInfoDetails._id}`,{
         method:'PUT',
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
  // update end=============

    return (
       <>
             <tbody>

            
            <tr className="hover">
            <th>{index + 1}</th>
        <td>{FullName}</td>
        <td>{Email}</td>
        <td>{Phone}</td>
        <td>${PaidAmmount}</td>
        <td className='text-center'>
        <button onClick={()=> handleDelete(_id)} className="btn mr-2 ">Delete</button>
        
        <label onClick={()=> handleUpdate(_id)}  htmlFor="my-modal-update" className="btn modal-button">Update</label>
        </td>
      </tr>
      </tbody>
      
{/* =============== */}
<input type="checkbox" id="my-modal-update" className="modal-toggle" />
     <div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-update" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    
       <div className="form-control w-50 flex justify-center max-w-xs">



{/* ============ FORM start===================== */}
<form onSubmit={handleSubmit(onSubmit)}>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Name</span>
    </label>
    <input
        type="text"
        placeholder="write your name"
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
       placeholder='write your email'
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


<input onClick={onSubmit} className='btn w-full max-w-xs text-white' type="submit" value="Update Now" />
</form>

 
{/* ==============form end=================== */}

</div>

      

  </div>
</div>
            {/* for modal======== */}
      

{/* =============== */}
       </>
    );
};

export default SingelInformation;