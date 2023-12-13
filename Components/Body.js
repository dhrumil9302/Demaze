"use client"
import React from 'react';
import Countup from 'react-countup';


const body = () =>{
    return(
        <>
        <div class="body">
            <div id="text">
                <div class="maintext">
                    <h1>Let's  Take your</h1>
                    <div class='bus'><h1 class='bus1'>Business </h1><h1> to the Next</h1></div>
                    <div id='ff'>
                        <div><h1>Level </h1></div>
                    </div>
                </div>
                <div>
                    <h5 class="secondtext">Lorem ipsum dolor sit amet, consectetur, <br/>adipiscing elit, sen </h5> 
                </div>
                <div id='btn'>
                    <button  class='btn2'>Get Start </button>
                    <button class='btn3'>Learn More</button>
                </div>
            </div>  

            <div id='img'>
                <img class='imgr' src="./image/rocket.png" alt=''/>
            </div>  
        </div>


        <footer class='last'>
            <div id='la1'>
                <div class='num1'>
                    <h2><Countup start={0} end={5430}></Countup></h2>
                    <h2><Countup start={0} end={2045}></Countup></h2>
                    <h2><Countup start={0} end={1020}></Countup></h2>
                    <h2><Countup start={0} end={500}></Countup></h2> 
                </div>
                <div class='num2'>
                    <h3 class='name'>Link Optimized</h3>
                    <h3 class='name'>Happy Customers</h3>
                    <h3 class='name'>Websites Improved</h3>
                    <h3 class='name'>Active Account </h3>
                </div>
            </div>
        </footer>
</>
     

        )
    }

    export default body