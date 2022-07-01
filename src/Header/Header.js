import React, { useState } from 'react';
import logo from '../Image/download.png'
import UseAllInformation from '../UseHooks/UseAllInformation';

const Header = () => {
  const [Information,SetInformation]=UseAllInformation()
  // const[total,setTotal]=useState({})
  const result = Information.reduce((total, setTotal) => total = total + parseFloat(setTotal.PaidAmmount),0);

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <img style={{width:'70px',height:'50px'}} src={logo} alt="" />
  </div>
  <div className="flex-none gap-2 mr-2">
{
  
}

<h1 className='text-bold text-2xl' >Total Ammount:{result}</h1>
  </div>
</div>
        </div>
    );
};

export default Header;