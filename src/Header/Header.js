import React from 'react';
import logo from '../Image/download.png'

const Header = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
  <div class="flex-1">
    <img style={{width:'70px',height:'50px'}} src={logo} alt="" />
  </div>
  <div class="flex-none gap-2 mr-2">
<h1 className='text-bold text-2xl' >Total Ammount:00000</h1>
  </div>
</div>
        </div>
    );
};

export default Header;