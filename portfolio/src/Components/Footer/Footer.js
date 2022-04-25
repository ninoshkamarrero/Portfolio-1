import React from 'react';
import logo from './FooterImgs/Logo.png';

function Footer(){
    return(
      <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <footer className="footer">
              <p>  &copy; 2022 NinoshkaMarrero</p>
              <div className="grid-item">
              
              </div>
              <p>
                {/* <a href="https://www.facebook.com" className="fa fa-facebook" target="_blank" aria-label="facebook" rel="noopener"></a>
                <a href="https://twitter.com" className="fa fa-twitter" target="_blank" aria-label="Twitter" rel="noopener"></a>
                <a href="https://www.instagram.com" className="fa fa-instagram" target="_blank" aria-label="instagram" rel="noopener"></a> */}
                <a href="https://linkedin.com" className="fa fa-linkedin-square" target="_blank" aria-label="linkedIn" rel="noopener"></a>
              </p>
            </footer>
      </>
    );
}

export default Footer;