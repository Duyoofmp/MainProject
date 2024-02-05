import React from 'react';
import '../header/header.css';
import logo1 from 'file:///C:/Users/DUYOOF/Desktop/mainPro/frontend/src/logo.svg';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Select from '../selectDrop/select';




const Header =()=>{
    return(
        
        <header>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <img src={logo1} alt='img'/>
                    </div>

                    {/*headerSearch start here */}
                    <div className='col-sm-5'>
                        <div className='headerSearch d-flex align-items-center'>
                            <div className='selctDrop cursor'>
                            All Categories
                            <Select/>
                            

                            </div>
                            
                    
                            
                            
                            

                            <div className='search'>
                                <input type='text' placeholder='Search for items...'/>
                                <SearchOutlinedIcon className='searchOutlinedIcon cursor'/>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

}
export default Header;
