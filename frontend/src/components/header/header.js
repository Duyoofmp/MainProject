import React from 'react';
import '../header/header.css';
import logo1 from 'file:///C:/react-test/react-test/src/assets/images/logo1.svg';




const Header =()=>{
    return(
        
        <header>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <img src={logo1}/>
                    </div>

                    {/*headerSearch start here */}
                    <div className='col-sm-5'>
                        <div className='headerSearch d-flex align-items-center'>
                            <div className='selectDrop cursor'>
                            All Categories
                            </div>

                            <div className='search'>
                                <input type='text' placeholder='Search for items...'/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

}
export default Header;
