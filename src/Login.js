import React , {useState} from 'react';
import './Login.css';
import {Link,  useHistory} from 'react-router-dom';
import {db, auth} from './firebase';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const history = useHistory();
    const signIn = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then( () => {
                history.push('/');
            })
            .catch( (error) => {
                alert(error.message);
            })
        
    }
    const register = (event) => {
        event.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then( (authObject)=> {
                console.log(authObject);
                if(authObject){
                    history.push('/');
                }
            })
            .catch( (error) => {
                alert(error.message);
            })
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
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
