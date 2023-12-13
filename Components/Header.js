"use client"
import React from 'react'

const Header = () =>{
    return(
       
        <>
        <div class='hed'>
            <div class="main">
                <div>
                    <h2 class='logo'>MARCHY</h2>
                </div>
                <div class='menubar'>
                    <h4 class="txt1">Home</h4>
                    <h4 class="txt">Pages</h4>
                    <h4 class="txt"><a href="#Service">Services</a></h4>
                    <h4 class="txt">About us</h4>
                    <h4 class="txt">Blog</h4>
                </div>
            <div>
                <button id='hedbtn' class='btn'>Contact Us</button>
            </div>
        </div>   
    </div>
        <hr/>
        </>
    )
}

export default Header