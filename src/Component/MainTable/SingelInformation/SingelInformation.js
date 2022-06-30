import React from 'react';

const SingelInformation = ({ singelinfo}) => {
    const {Billing_id,FullName,Email,Phone,PaidAmmount}= singelinfo
    return (
       
             <tbody>

            
            <tr class="hover">
        <th>{Billing_id}</th>
        <td>{FullName}</td>
        <td>{Email}</td>
        <td>{Phone}</td>
        <td>{PaidAmmount}</td>
        <td>
        <button class="btn mr-2">Delete</button>
        <button class="btn">Update</button>
        </td>
      </tr>
      </tbody>
       
    );
};

export default SingelInformation;