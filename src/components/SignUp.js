import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



function SignUp() {
    // for google authentication
    const provider = new GoogleAuthProvider();

    // for redirecting to home page
    const navigate = useNavigate();

    // for authentication
    const auth = getAuth();

    // for storing data in state for login
    const [data, setData] = useState({ email: '', password: '' })

    // handling change in input fields
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    // handling submit for login
    const handleSubmit = (e) => {
        e.preventDefault();
        // creating user
        createUserWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
          
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });

        // redirecting to home page
        navigate('/');
    }
    const handleSubmitGoogle = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log("user is:",user, token);

        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email, credential);
        });
    }


    return (
        <form className='items-center text-center p-2 bg-slate-800'>
            <h1 className='text-3xl text-white'>SignUp</h1>
            <label htmlFor="name">
                <span className='text-white'>Email</span>
            </label>
            <input className='my-2 mx-2' type="email" name="email" placeholder='enter your name' value={data.email} onChange={onChange} />
            <label htmlFor="password">
                <span className='text-white'>Password</span>
            </label>
            <input className='my-2 mx-2' type="password" name="password" placeholder='enter your password' value={data.password} onChange={onChange} />
            <button className='bg-gray-500 rounded-sm p-2 my-2 mx-auto text-white block' type="submit" onClick={handleSubmit}>Signup</button>
            <button onClick={handleSubmitGoogle} className='bg-gray-500 rounded-sm p-2 my-2 mx-auto text-white block' type="submit">SignUp with Google</button>


        </form>
    )
}

export default SignUp