import React from 'react';
import UseAllInformation from '../../../UseHooks/AllInformation';

const SingelInformation = ({ singelinfo,index}) => {
    const {_id,FullName,Email,Phone,PaidAmmount}= singelinfo
    const [Information,SetInformation]=UseAllInformation()
    const handleDelete=(id)=>{
      
      const procced=window.confirm('Are you sure?')
         if(procced){
          fetch(`http://localhost:5000/api/billing-list/${id}`,{
              method:"DELETE",

          })
          .then(res=>res.json())
          .then(data=>{
              console.log('success',data)
              const remaining=Information.filter(singelInfo=>singelInfo._id !== id)
              console.log(remaining);
              SetInformation(remaining)
          })
          console.log(id);
         }
  }
    return (
       
             <tbody>

            
            <tr class="hover">
            <th>{index + 1}</th>
        <td>{FullName}</td>
        <td>{Email}</td>
        <td>{Phone}</td>
        <td>${PaidAmmount}</td>
        <td className='text-center'>
        <button onClick={()=> handleDelete(_id)} class="btn mr-2 ">Delete</button>
        <button class="btn ">Update</button>
        </td>
      </tr>
      </tbody>
       
    );
};

export default SingelInformation;