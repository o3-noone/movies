import React from 'react'
import "./support.css"
import Questions from '../Home/questions/questions'
import Trial from '../Home/tralFree/trial'
import ScrolTop from '../scrolTop/scrolTop'
const Support = () => {
  return (
    <>
      <div className='Support p4'>
<ScrolTop/>
        <div className="supportBox">
          <div className="supportInfo">
            <h2>Welcome to our support page!</h2>
            <p>We're here to help you with any problems you may be having with our product.</p>
            <div className="supportImg">
            </div>
          </div>
          <form className="supportMessage" typeof='submit'>

            <div className="messageInputs">
              <div className="inputs">
                <h4>First Name</h4>
                <input placeholder='Enter First Name' type="text" required />
              </div>
              <div className="inputs">
                <h4>Last Name</h4>
                <input placeholder='Enter Last Name' type="text" required />
              </div>
            </div>
            <div className="messageInputs">
              <div className="inputs">
                <h4>Email</h4>
                <input placeholder='Enter your Email' type="gmail" required />
              </div>
              <div className="inputs">
                <h4>Phone Number</h4>
                <input placeholder='Enter Phone Number' type="number" required />
              </div>
            </div>
            <div className="messageInputs">
              <div className="inputsArea">
                <h4>Message</h4>
                <textarea name="message" placeholder='Enter Your Message' id="message"></textarea>
              </div>
            </div>
            <div className="messageInputs">
              <div className="checkbox">
                <input type="checkbox" />
                <p>I agree with Terms of Use and Privacy Policy</p>
              </div>
              <div className="sendBtn" typeof='submit'>Send Message</div>
            </div>
          </form>

        </div>
      </div>
      <Questions />
      <Trial />
    </>
  )
}

export default Support