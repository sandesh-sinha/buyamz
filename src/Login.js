import React , {useState} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const signIn = (event) => {
        event.preventDefault();

    }
    const register = (event) => {
        event.preventDefault();
    }
    return (
        <div className='login'>
            <Link to='/home'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg.png' 
                    className='login__logo' alt='login' />
            </Link>
            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                    <button className='login__singInButton' onClick={signIn}>Sign In</button>
                </form>
                <p>By signing-in you agree to the conditions of Use and sale.
                 Please our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</p>
                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
