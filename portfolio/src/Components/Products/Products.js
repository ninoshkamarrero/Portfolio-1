import React, { useEffect } from 'react';
import products from '../Products/Products.json';
//import Axios from "axios";
import Project1 from './ProductImages/Banin.jpg';
import Project2 from './ProductImages/Grubhub.jpg';
import Project3 from './ProductImages/Nimar.jpg';
import Project4 from './ProductImages/SanJuan.jpg';



function Products(){

   
//     useEffect(() =>{
//     Axios.get('http://localhost:3002/').then((response) =>{
//         console.log(response.data);
//     });
// },[]);

    return(
        <>

    <div class="Hero"></div>
    <br></br>
        <hr size="15%" width="75%" color="black"/>
    <h2>Projects</h2>
   
        <hr size="15%" width="75%" color="black"/><br></br>
        
    <div class="productcontainer">
        <div class="product"> 
            <img src={Project4} alt="SanJuan"/>
            <div>Sphere Transparent Clutch with Pearl & Chain Handle</div>
            <h4>San Juan</h4>
            <p>Project example</p>
            <a class="projectLinks" href="https://github.com/ninoshkamarrero/Gateway-Project" target="_blank" aria-label="github" rel="noopener">
            <button class="projectButtons">View Github</button> 
            </a><br/><br/>
        </div>


        <br></br>
        <hr size="15%" width="75%" color="black"/><br></br>
        <div class="product"> 
            <img src={Project1} alt="Banin"/>
            <div>Multi Color Mini Handle Bag</div>
            <h4>San Juan</h4>
            <p>Project example</p>
            <a class="projectLinks" href="https://github.com/noahrlopez/code-for-justice-project/tree/Ninoshka" target="_blank" aria-label="github" rel="noopener">
            <button class="projectButtons">View Github</button> 
            </a><br/><br/>
        </div>


        <br></br>
        <hr size="15%" width="75%" color="black"/><br></br>
        <div class="product"> 
            <img src={Project3} alt="Nimar"/>
            <div>Green Wired Drop Crystals Earrings</div>
            <h4>San Juan</h4>
            <p>Project example</p>
            <a class="projectLinks" href="https://main.d3fs98qszg6oqr.amplifyapp.com/" target="_blank" aria-label="github" rel="noopener">
            <button class="projectButtons">View Website</button> 
            </a><br/><br/>
        </div>


        <br></br>
        <hr size="15%" width="75%" color="black"/><br></br>
        <div class="product"> 
            <img src={Project2} alt="Grubhub"/>
            <div>White Wired Drop Crystals Earrings</div>
            <h4>San Juan</h4>
            <p>Project example</p>
            <a class="projectLinks" href="https://main.d3fs98qszg6oqr.amplifyapp.com/" target="_blank" aria-label="github" rel="noopener">
            <button class="projectButtons">View Website</button> 
            </a><br/><br/>
        </div>
    </div>
        </>
    );
}

export default Products;