import React from 'react';

function ContactUs(){
    return(
        <>
    <div class="container">
          <h2>Contact Me</h2>
        <div class="row">
          <div class="column">
            <form action="/action_page.php" onsubmit="return validateForm()" method="post">
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="fname" placeholder="Type first name here.." required/>
              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Type last name here.." required/>
              <label for="email">Email</label>
              <input type="text" id="email" name="email" placeholder="Type email here.." required/>
              <label for="subject">Questions</label>
              <textarea id="subject" name="subject" style={{ height: "170px"}} placeholder="Questions or concerns"></textarea>
              <input type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
        </>
    );
}

export default ContactUs;
