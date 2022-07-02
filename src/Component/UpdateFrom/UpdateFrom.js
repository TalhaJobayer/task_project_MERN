// import React from 'react';
// import { useForm } from 'react-hook-form';

// const UpdateFrom = ({singelInfoDetails}) => {
//     const { register, formState: { errors },reset, handleSubmit } = useForm();
//     const onSubmit= (data)=>{

    
//         fetch(`https://apologetic-whistler-24285.herokuapp.com/api/billing-list/`,{
//             method:'put',
//              headers:{
//                 "Content-Type":"application/json"
//             },
//              body:JSON.stringify(data) 
     
//           })
//           .then(res=>res.json())
//          .then(data=>{
//           alert('added succesfully')
        
//         console.log('Success:', data);})
//         reset()
      
//            }
//     return (
//         <>
//         <form onSubmit={handleSubmit(onSubmit)}>

// <div className="form-control w-full max-w-xs">
//     <label className="label">
//         <span className="label-text">Name</span>
//     </label>
//     <input
//         type="text"
//         value={singelInfoDetails.FullName}
//         className="input input-bordered w-full max-w-xs"
//         {...register("FullName", {
//             required: {
//                 value: true,
//                 message: 'Name is Required'
//             }
//         })}
//     />
//     <label className="label">
//         {errors.FullName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.FullName.message}</span>}
//     </label>
// </div>

// <div className="form-control w-full max-w-xs">
//     <label className="label">
//         <span className="label-text">Email</span>
//     </label>
//     <input
//         type="email"
//         value={singelInfoDetails.Email}
//         className="input input-bordered w-full max-w-xs"
//         {...register("Email", {
//             required: {
//                 value: true,
//                 message: 'Email is Required'
//             },
//             pattern: {
//                 value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
//                 message: 'Provide a valid Email'
//             }
//         })}
//     />
//     <label className="label">
//         {errors.Email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Email.message}</span>}
//         {errors.Email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.Email.message}</span>}
//     </label>
// </div>
// <div className="form-control w-full max-w-xs">
//     <label className="label">
//         <span className="label-text">Phone Number</span>
//     </label>
//     <input
//         type="Number"
//         placeholder="Phone Number"
//         className="input input-bordered w-full max-w-xs"
//         {...register("Phone", {
//             required: {
//                 value: true,
//                 message: 'Phone Number is Required'
//             },
//             minLength: {
//                 value:11,
//                 message:'Must be in 11 characters'
//             }
//         })}
//     />
//     <label className="label">
//         {errors.Phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Phone.message}</span>}
//         {errors.Phone?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.Phone.message}</span>}
//     </label>
//     <label className="label">
//         <span className="label-text">Amount</span>
//     </label>
//     <input
//         type="Number"
//         placeholder="Amount you want pay"
//         className="input input-bordered w-full max-w-xs"
//         {...register("PaidAmmount", {
//             required: {
//                 value: true,
//                 message: 'Amount is Required'
//             }
//         })}
//     />
//     <label className="label">
//         {errors.PaidAmmount?.type === 'required' && <span className="label-text-alt text-red-500">{errors.PaidAmmount.message}</span>}
       
//     </label>
// </div>


// <input className='btn w-full max-w-xs text-white' type="submit" value="Update Now" />
// </form>

 
        
//         </>
//     );
// };

// export default UpdateFrom;