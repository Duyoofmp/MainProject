import React from 'react';
import '../header/header.css';
import logo1 from 'file:///C:/react-test/react-test/src/assets/images/logo1.svg';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import IconCart from 'file:///C:/react-test/react-test/src/assets/images/icon-cart.svg'
import IconHeart from 'file:///C:/react-test/react-test/src/assets/images/icon-heart.svg';




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
                            <div className='search'>
                                <input type='text' placeholder='Search for items...'/>
                                <SearchOutlinedIcon className='searchOutlinedIcon cursor'/>

                                
                            </div>
                         </div>
                    </div>
                            
                             
                    <div className='col-sm-5 d-flex align-items-center'>
                        <div className='ml-auto d-flex align-items-center'>
                            <ul className='list list-inline mb-0 headerTabs'>
                                            
                                <li className='list-inline-item'>
                                    <span>
                                        <img src={IconHeart} />
                                            <span className='badge bg-success rounded-circle'>3</span>
                                                    Wishlist
                                    </span>
                                </li>
                                <li className='list-inline-item'>
                                    <span>
                                        <img src={IconCart} />
                                            <span className='badge bg-success rounded-circle'>3</span>
                                                    Cart
                                    </span>
                                </li>
                                            


                             </ul>  
                        </div>     

                     </div>
                                
                            
                            
                            
                    
                            
                            
                            

                       
                    
                </div>
            </div>
        </header>
    )

}
export default Header;