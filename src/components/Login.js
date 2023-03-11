import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
function Login() {
    const [data, setData] = useState({ email: '', password: '' })
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
        navigate('/');
    }

    return (
        <form className='items-center text-center h-40 bg-slate-800'>
            <h1 className='text-3xl text-white'>Login</h1>
            <label htmlFor="name">
                <span className='text-white'>Email</span>
            </label>
            <input className='my-2 mx-2' type="email" name="email" placeholder='enter your name' value={data.email} onChange={onChange} />
            <label htmlFor="password">
                <span className='text-white'>Password</span>
            </label>
            <input className='my-2 mx-2' type="password" name="password" placeholder='enter your password' value={data.password} onChange={onChange} />
            <button className='bg-gray-500 rounded-sm p-2 my-2 mx-auto text-white block' type="submit" onClick={handleSubmit}>Login</button>

        </form>
    )
}

export default Login