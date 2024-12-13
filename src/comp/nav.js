import React from "react";
import './nav.css'
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";

const Nav = () => {
    return(
        <>
        <div className="header">
            <div className="top_header">
                <div className="icon">
                <MdLocalShipping />
                </div>
                <div className="info">
                    <p>Free Shipping when Shopping upto $1000</p>
                </div>
            </div>
            <div className="mid_header">
                <div className="logo">
                    <img src="https://via.placeholder.com/150" alt="Logo" />
                    {/* <p>Cepta IT</p> */}
                </div>
                <div className="search_box">
                    <input type="text" value='' placeholder="search"></input>
                    <button><AiOutlineSearch /></button>
                </div>
                <div className="user">
                    <div className="icon">
                    <FiLogIn />
                    </div>
                    <div className='btn'>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Nav;