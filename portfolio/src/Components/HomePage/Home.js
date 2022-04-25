import React from 'react';
import headshot from './imgs/nino.jpeg';
import HomeSlider from './HomeSlider';
import SliderPics from './SliderPics';
function HomePage() {
        return(
            <>
            <body>
                    
                    
                <div className="homeContainer">
                    <div className="homeImage"> 
                    <img src= {headshot} alt ="headshot" ></img>
                        <hr size="5%" width="35%" color="black"/> 
                        <h2>¡Hola!</h2>
                        <p>Welcome to my portfolio! My name is Ninoshka Marrero and I am currently a coding apprentice with aspirations of becoming a full time developer. I hope this page allows you to get to know a little bit more about my professional experience. Please don't hesitate to reach me for any questions or inquiries you may have! </p>
                    </div>
                    </div>

                    {/* <div className="Hero">
                    <HomeSlider slides={SliderPics} />
                        <div className="HeroText">
                        <h1>Welcome To NiMar Boutique</h1>
                        </div>
                    </div> */}
                    </body>
            </>
);     
}  

export default HomePage;