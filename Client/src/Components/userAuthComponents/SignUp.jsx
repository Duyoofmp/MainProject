import React,{useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { UseRegister } from './AuthHandlers/authHandlers';
import {Toaster,toast} from 'react-hot-toast';
import { createPortal } from 'react-dom';
import KeyboardOn from "../KeyboardOn.jsx";

function SignUp() {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [address, setAddress] = useState(null);
    const [password, setPassword] = useState(null);
    const [loader,setloader] = useState(false);
    const navigate = useNavigate();
    const [emailBarActive, setEmailhBarActive] = useState(false);
    const [passwordBarActive, setPasswordBarActive] = useState(false);
    const [nameBarActive, setNameBarActive] = useState(false);
    const [addressBarActive, setAddressBarActive] = useState(false);
    const [phoneBarActive, setPhoneBarActive] = useState(false);

    const handleEmailFocus = () => {
        setEmailhBarActive(true);
        setPasswordBarActive(false);
        setPhoneBarActive(false)
        setAddressBarActive(false)
        setNameBarActive(false)


      };
      const handlePasswordFocus = () => {
        setEmailhBarActive(false);
        setPasswordBarActive(true);
        setPhoneBarActive(false)
        setAddressBarActive(false)
        setNameBarActive(false)

      };
      const handleNameFocus = () => {
        setEmailhBarActive(false);
        setPasswordBarActive(false);
        setPhoneBarActive(false)
        setAddressBarActive(false)
        setNameBarActive(true)

      };
      const handleAddressFocus = () => {
        setEmailhBarActive(false);
        setPasswordBarActive(false);
        setPhoneBarActive(false)
        setAddressBarActive(true)
        setNameBarActive(false)

      };
      const handlePhoneFocus = () => {
        setEmailhBarActive(false);
        setPasswordBarActive(false);
        setPhoneBarActive(true)
        setAddressBarActive(false)
        setNameBarActive(false)

      };
      const handleSearchBlur = () => {
        setEmailhBarActive(false);
        setPasswordBarActive(false);
        setPhoneBarActive(false)
        setAddressBarActive(false)
        setNameBarActive(false)

      };

    const SubmitHandler = async(e) => {

        setloader(true)

        e.preventDefault();

        try{
        const response = await UseRegister(name,email,password,address,phoneNumber)

           
        if (response.error){
            setloader(false)
            toast.error(response.error)

        }

        if (response.success){
            localStorage.setItem('auth_token', response.token)
            setloader(false)
            navigate('/')


        }
    }catch(e){
        toast.error(e.message)
        setloader(false)
    }

    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    },[])

  return (
    <>
    
    <Toaster
    position="top-center"
    reverseOrder={false}
    />

    <div className="loginsection">

    <div className="login_form">

    <div className="illustration">
    <img src="https://ouch-cdn2.icons8.com/SOMJJnavA0MTyYXpv987VMbj3ZtSUAwlVt2wd1hh5Zw/rs:fit:368:355/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjMz/LzQ3YjdiODc4LTM5/NjYtNDU2Mi1iOGVk/LTRhYTNlNmQyNTRk/NC5wbmc.png" alt="" />

    <h2>Create a new Account!</h2> 
   </div>  

   
    <form onSubmit={SubmitHandler}>
        <input type="text" required disabled={loader}  onFocus={handleNameFocus}  name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" required disabled={loader}  onFocus={handleEmailFocus}  name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="number" required disabled={loader}  onFocus={handlePhoneFocus}  name="phoneNumber" placeholder="PhoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <input type="text" required disabled={loader}   onFocus={handleAddressFocus} name="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
          <input type="password" required disabled={loader}  onFocus={handlePasswordFocus   } name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" required disabled={loader} >{loader ? 'SigningUp...' : 'SignUp'}</button>
        <p>Don't have an account? <Link to={'/login'}>Login</Link></p>

    </form>
   
    </div>
    
   </div>
   {emailBarActive && (
        // Render your component here when search bar is active
        createPortal(
          <KeyboardOn  setSearch={setEmail} handleClose={handleSearchBlur} />,
          document.body
        )
      )}
       {passwordBarActive && (
        // Render your component here when search bar is active
        createPortal(
          <KeyboardOn  setSearch={setPassword} handleClose={handleSearchBlur} />,
          document.body
        )
      )}
      {nameBarActive && (
        // Render your component here when search bar is active
        createPortal(
          <KeyboardOn  setSearch={setName} handleClose={handleSearchBlur} />,
          document.body
        )
      )}
       {addressBarActive && (
        // Render your component here when search bar is active
        createPortal(
          <KeyboardOn  setSearch={setAddress} handleClose={handleSearchBlur} />,
          document.body
        )
      )}
      {phoneBarActive && (
        // Render your component here when search bar is active
        createPortal(
          <KeyboardOn  setSearch={setPhoneNumber} handleClose={handleSearchBlur} />,
          document.body
        )
      )}
   </>
  )
}

export default SignUp;
