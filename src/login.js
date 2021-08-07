import React from 'react'
import './login.css'
import Google from './Icons/Google.svg'
import Facebook from './Icons/Facebook.svg'
import Apple from './Icons/Apple.svg'
import greaterThan from './Icons/greaterThan.svg'
import Plane1 from './Icons/Plane1.svg'
import Plane2 from './Icons/Plane2.svg'
import Plane3 from './Icons/Plane3.svg'

const login = () => {
    

    return (
        <div className="login">
            <div className="Login">
                <header>Travello</header>
                <p>Login</p>
                <input type="text" placeholder="Email ID" />
                <input type="password" placeholder="Password" />
                <button id="login-btn">Login</button>
                <section>
                    <img src={Google} alt="Google"/>
                    <img src={Facebook} alt="Facebook"/>
                    <img src={Apple} alt="Apple ID"/>
                </section>
                <button id="login-page-btn"><img src={greaterThan} alt="Greater than symbol" /></button>
                <img id="Plane1" src={Plane1} alt=""/>
            </div>

            <div className="Login-Signup">
                <header>Travello</header>
                <div>
                    <section>
                        <h2>Login</h2>
                        <p>
                           <span>Existing User?</span><br/>
                           Welcome Back!<br/>
                           Login with ur credentials
                        </p>
                        <button>Login</button>
                    </section>

                    <article>
                        <h2>Sign Up</h2>
                        <p>
                        <span>New User?</span><br/>
                        We assure,<br/>
                        U’ll have ur best tym here, Go ahead. 
                        </p>
                        <button>Sign Up</button>
                    </article>
                </div>
                <img id="Plane2" src={Plane2} alt=""/>
            </div>

            <div className="Signup">
                <header>Travello</header>
                <p>Sign Up</p>
                <div>
                    <input id="firstname" type="text" placeholder="First Name" />
                    <input id="lastname" type="text" placeholder="Last Name" />
                    <input id="emailid" type="text" placeholder="Email id" />
                    <input id="pass" type="password" placeholder="Set Password" />
                    <input id="password" type="password" placeholder="Confirm Password" />
                </div>
                <button id="signup-btn">Sign Up</button>
                <section>
                    <img src={Google} alt="Google"/>
                    <img src={Facebook} alt="Facebook"/>
                    <img src={Apple} alt="Apple ID"/>
                </section>
                <button id="signup-page-btn"><img src={greaterThan} alt="Greater than symbol" style={{transform:"scaleX(-1)"}} /></button>
                <img id="Plane3" src={Plane3} alt=""/>
            </div>

        </div>
    )
}

export default login;