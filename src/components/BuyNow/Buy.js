import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Buy.css'




// const navigate = useNavigate();

const Buy = (props) => {
    const [msg, setMsg] = useState('');
    const [pincode, setPincode] = useState("");
    const [name, setName] = useState("");
    const [email, setEmaill] = useState("")
    const [address, setAddress] = useState("");

    const showMsg = () => {
        setMsg("Your Order successfully Done . . .")
    }



    const register = (e) => {

        e.preventDefault();


        let PincodePattern = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
        let namePattern = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
        let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        let addressPattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/



        if (!pincode) {
            return alert("Name is required")

        } else {
            if (!pincode.match(PincodePattern)) {
                alert("Invalide name")
            } else {
                localStorage.setItem("name", name)
            }

        }

        if (!name) {
            return alert("name is required")
        } else {
            if (name.match(namePattern)) {
                alert("Invalide url")
            } else {
                localStorage.setItem("name", name)
            }
        }



        if (!email) {
            return alert("email is required")
        } else {
            localStorage.setItem("email", email)
        }





        if (!address) {
            return alert("address is required")
        } else {
            if (address.match(addressPattern)) {
                alert("Invalide password")
            } else {
                localStorage.setItem("address", address)

            }

        }



        alert("Registered successfully")



        // navigate("/")

        setPincode("");
        setName(" ");
        setEmaill("");
        setAddress("");
    }





    return (
        <>
            <div className="cartNavbar">
                <div className='complogo'>

                </div>
            </div>
            <div className="totalall">
                <div className="total">
                    <div className="secondnav">
                        <NavLink to='/'>
                            <i class="fa-solid fa-house"></i>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="container">
                <from className='from'>
                    <div className='pin'>
                        <label htmlFor="Pincode">Pincode :- </label>
                        <input type="text" placeholder='Enter Pincode .. ' value={pincode} onChange={e => setPincode(e.target.value)} />
                        <span>Check delivery available or not</span>
                    </div>
                    <div className='name'>
                        <label htmlFor="Name">Name :- </label>
                        <input type="text" placeholder='Enter Name .. ' value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className='name'>
                        <label htmlFor="Email">Email :- </label>
                        <input type="text" placeholder='Enter Email .. ' value={email} onChange={e => setEmaill(e.target.value)} />
                    </div>
                    <div className='name'>
                        <label htmlFor="Address">Address :- </label>
                        <textarea type="text" placeholder='Enter Address .. ' className='add' value={address} onChange={e => setAddress(e.target.value)} />
                    </div>
                    <div className="name">
                        <button className="btn" onClick={showMsg}>Order Now</button>
                        <span>{msg}</span>
                    </div>
                </from>
            </div>
        </>
    )
}

export default Buy