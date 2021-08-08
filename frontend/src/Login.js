import React,{useState, useEffect} from 'react'
import './Login.css'
import Google from './Icons/Google.png'
import Facebook from './Icons/Facebook.png'
import Apple from './Icons/Apple.png'
import greaterThan from './Icons/greaterThan.svg'
import Plane1 from './Icons/Plane1.svg'
import Plane2 from './Icons/Plane2.svg'
import Plane3 from './Icons/Plane3.svg'
import {useHistory} from 'react-router-dom'

var flag = 1
const Login = ({entry,setEntry}) => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const history = useHistory()

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
        document.getElementById('Login-heading').style.transform = "translate(-334px, 40px)"
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

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            history.push("/home")
        }
    }, [])
    async function loginSubmit() {
        let item = {email, pass}
        let result = await fetch("https://api.chetanpareek.tech/api/login",{
            method: 'post',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        result = await result.json()
        localStorage.getItem('user-info', JSON.stringify(item))
        history.push("/home")
    }


    const handleInput = (e) => {
        let data = { ...entry}
        data[e.target.name] = e.target.value
        setEntry(data)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(entry)
        
        let result = await fetch("https://api.chetanpareek.tech/api/create_user", {
            method: 'post',
            body: JSON.stringify(entry),
            headers: { 
                'Content-Type': 'application/json'
            },
        })
        result = await result.json()
        localStorage.setItem('user-info', JSON.stringify(result))
        history.push("/home")


    }


    return (
        <div style={{display:"flex", justifyContent:"center", backgroundColor:"coral"}}>
            <div className="login" id="login">
                <div className="Login" id="Login">
                    <header>Travello</header>
                    <p> </p>
                    <form>
                        <input 
                            autoComplete="off"
                            name="loginemail" 
                            type="text" 
                            placeholder="Email ID" 
                            required 
                            style={{marginTop:"45px"}}
                            onChange={(e)=> {
                                setEmail(e.target.value)
                            }} />
                        <input 
                            autoComplete="off"
                            name="loginpass" 
                            type="password" 
                            placeholder="Password" 
                            required
                            onChange={(e) => {
                                setPass(e.target.value)
                            }} />
                    </form>
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
                                Login with your credentials
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
                                you’ll have your best time here, Go ahead. 
                            </p>
                            <button type="submit" form="form" id="gotoSignup" onClick={ () =>{ 
                                if(flag === 1){
                                    signupAnim()
                                }
                                
                                
                            } }>Sign Up</button>
                        </article>
                    </div>
                    <img id="Plane2" src={Plane2} alt=""/>
                </div>

                <div className="Signup" id="Signup">
                    <header>Travello</header>
                    <p> </p>
                    <form onChange={handleInput} onSubmit={handleSubmit} id="form">
                        <input autoComplete="off" id="firstname" type="text" placeholder="First Name" name="fname" />
                        <input autoComplete="off" id="lastname" type="text" placeholder="Last Name" name="lname" />
                        <input autoComplete="off" id="emailid" type="text" placeholder="Email id" name="email" />
                        <input autoComplete="off" id="username" type="text" placeholder="User Name" name="username" />
                        <input autoComplete="off" id="pass" type="password" placeholder="Set Password" name="password" />
                        <input autoComplete="off" id="password" type="password" placeholder="Confirm Password" name="Cpassword" />
                    </form>
                    
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

export default Login;