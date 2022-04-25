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
            <h4>Gateway Project</h4>
            <p>The gateway project was our first informative website of the program. I decided to do this project based on my beautiful island San Juan, Puerto Rico. This project required us to demonstrate our abilities in HTML and CSS. </p>
            <a class="projectLinks" href="https://github.com/ninoshkamarrero/Gateway-Project" target="_blank" aria-label="github" rel="noopener">
            <button class="projectButtons">View Github</button> 
            </a>
            <a class="projectLinks" href="https://destinationsanjuan.netlify.app/" target="_blank" aria-label="github" rel="noopener">
            <button class="projectButtons">View Website</button> 
            </a><br/><br/>
            
        </div>


        <br></br>
        <hr size="15%" width="75%" color="black"/><br></br>
        <div class="product"> 
            <img src={Project1} alt="Banin"/>
            <h4>Code for Justice Project</h4>
            <p>On this group project we needed to develop a website that could help a social problem around the world. We decided to create a website to help homeless people in Austin, Texas. Our mission was to prevent and end homelessness by creating shelter or housing, offer counseling, create a rehanilitation program for addicts, and by offering partner employment opportunities. </p>
            <a class="projectLinks" href="https://github.com/ninoshkamarrero/code-for-justice-project" target="_blank" aria-label="github" rel="noopener">
            <button class="projectButtons">View Github</button> 
            </a>
            <a class="projectLinks" href="https://baninorg.netlify.app/" target="_blank" aria-label="github" rel="noopener">
            <button class="projectButtons">View Website</button> 
            </a><br/><br/>
            
        </div>


        <br></br>
        <hr size="15%" width="75%" color="black"/><br></br>
        <div class="product"> 
            <img src={Project3} alt="Nimar"/>
            <h4>E-commerce Project</h4>
            <p>I created my own website of jewerly and accesories called NiMar Boutique. It's an online boutique where I create unique pieces for everyone that loves jewerly like myself.  </p>
            <a class="projectLinks" href="https://github.com/ninoshkamarrero/E-Commerce-Pt-2" target="_blank" aria-label="github" rel="noopener">
            <button class="projectButtons">View Github</button> 
            </a>
            <a class="projectLinks" href="https://nimarboutique.netlify.app/" target="_blank" aria-label="github" rel="noopener">
            <button class="projectButtons">View Website</button> 
            </a>

        </div>


        <br></br>
        <hr size="15%" width="75%" color="black"/><br></br>
        <div class="product"> 
            <img src={Project2} alt="Grubhub"/>
            <h4>Redesign Project</h4>
            <p>On this group project we had to redesign any website that we wanted as a group. We chose to redesign the website of Grubhub.</p>
            <a class="projectLinks" href="https://github.com/ninoshkamarrero/Grubhub-Redesign" target="_blank" aria-label="github" rel="noopener">
            <button class="projectButtons">View Github</button> 
            </a>
            <a class="projectLinks" href="https://main.d3fs98qszg6oqr.amplifyapp.com/" target="_blank" aria-label="github" rel="noopener">
            <button class="projectButtons">View Website</button> 
            </a><br/><br/>
        </div>
    </div>
        </>
    );
}

export default Products;