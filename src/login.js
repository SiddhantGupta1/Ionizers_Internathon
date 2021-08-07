import React from 'react'
import './login.css'
import Google from './Icons/Google.png'
import Facebook from './Icons/Facebook.png'
import Apple from './Icons/Apple.png'
import greaterThan from './Icons/greaterThan.svg'
import Plane1 from './Icons/Plane1.svg'
import Plane2 from './Icons/Plane2.svg'
import Plane3 from './Icons/Plane3.svg'


var flag = 1
const login = () => {

    const shiftAnim = () => {
        const Login = document.getElementById('Login')
        const Login_Signup = document.getElementById('Login-Signup')
        const Signup = document.getElementById('Signup')

        if(flag === 1)
        {
            Login_Signup.style.transform = "translateX(0%)"
            Login.style.transform = "translateX(0%)"
            Signup.style.transform = "translateX(0%)"

        }
        else if(flag === 2)
        {
            Login_Signup.style.transform = "translateX(-100%)"
            Login.style.transform = "translateX(-100%)"
            Signup.style.transform = "translateX(-100%)"

        }
        else if(flag === 3)
        {
            Login_Signup.style.transform = "translateX(-200%)"
            Login.style.transform = "translateX(-200%)"
            Signup.style.transform = "translateX(-200%)"
        }
    }

    const loginAnim = () => {
        shiftAnim()
        document.getElementById('Login-heading').style.transform = "translateX(-334px)"
        const gotoLogin = document.getElementById('gotoLogin')

        gotoLogin.style.transform = "translate(-327px)"
        gotoLogin.style.width = "255px"
        flag = 2
    }

    const gofromLoginAnim = () => {
        shiftAnim()
        document.getElementById('Login-heading').style.transform = "translateX(0%)"
        const gotoLogin = document.getElementById('gotoLogin')

        gotoLogin.style.transform = "translate(0%)"
        gotoLogin.style.width = "175px"
        flag=1
    }

    const signupAnim = () => {
        flag=3
        shiftAnim()
        document.getElementById('Signup-heading').style.transform = "translateX(317px)"
        const gotoSignup = document.getElementById('gotoSignup')

        gotoSignup.style.transform = "translate(247px, 95px)"
        gotoSignup.style.width = "255px"
        flag=2
    }

    const gofromSignupAnim = () => {
        shiftAnim()
        document.getElementById('Signup-heading').style.transform = "translateX(0%)"
        const gotoSignup = document.getElementById('gotoSignup')

        gotoSignup.style.transform = "translate(0%)"
        gotoSignup.style.width = "175px"
        flag=1
    }

    const loginSubmit = () => {
        console.log("Login")
        window.location.href = "/home"
    }
    const signupSubmit = () => {
        console.log("Signup")
    }

    return (
        <div style={{display:"flex", justifyContent:"center", backgroundColor:"coral"}}>
            <div className="login" id="login">
                <div className="Login" id="Login">
                    <header>Travello</header>
                    <p> </p>
                    <input type="text" placeholder="Email ID" style={{marginTop:"45px"}} />
                    <input type="password" placeholder="Password" />

                    <section>
                        <img src={Google} alt="Google"/>
                        <img src={Facebook} alt="Facebook"/>
                        <img src={Apple} alt="Apple ID"/>
                    </section>
                    <button onClick={gofromLoginAnim} id="login-page-btn"><img src={greaterThan} alt="Greater than symbol" /></button>
                    <img id="Plane1" src={Plane1} alt=""/>
                </div>

                <div className="Login-Signup" id="Login-Signup">
                    <header>Travello</header>
                    <div>
                        <section>
                            <h2 id="Login-heading">Login</h2>
                            <p>
                                <span>Existing User?</span><br/>
                                Welcome Back!<br/>
                                Login with ur credentials
                            </p>
                            <button id="gotoLogin" onClick={ () =>{ 
                                if(flag === 1){
                                    loginAnim()
                                }
                                else{
                                    loginSubmit()
                                }
                            } }>Login</button>
                        </section>

                        <article>
                            <h2 id="Signup-heading">Sign Up</h2>
                            <p>
                                <span>New User?</span><br/>
                                We assure,<br/>
                                U’ll have ur best tym here, Go ahead. 
                            </p>
                            <button id="gotoSignup" onClick={ () =>{ 
                                if(flag === 1){
                                    signupAnim()
                                }
                                else{
                                    signupSubmit()
                                }
                            } }>Sign Up</button>
                        </article>
                    </div>
                    <img id="Plane2" src={Plane2} alt=""/>
                </div>

                <div className="Signup" id="Signup">
                    <header>Travello</header>
                    <p> </p>
                    <div style={{marginTop:"45px"}}>
                        <input id="firstname" type="text" placeholder="First Name" />
                        <input id="lastname" type="text" placeholder="Last Name" />
                        <input id="emailid" type="text" placeholder="Email id" />
                        <input id="pass" type="password" placeholder="Set Password" />
                        <input id="password" type="password" placeholder="Confirm Password" />
                    </div>
                    
                    <section>
                        <img src={Google} alt="Google"/>
                        <img src={Facebook} alt="Facebook"/>
                        <img src={Apple} alt="Apple ID"/>
                    </section>
                    <button id="signup-page-btn" onClick={gofromSignupAnim} ><img src={greaterThan} alt="Greater than symbol" style={{transform:"scaleX(-1)"}} /></button>
                    <img id="Plane3" src={Plane3} alt=""/>
                </div>

            </div>
        </div>
    )
}

export default login;