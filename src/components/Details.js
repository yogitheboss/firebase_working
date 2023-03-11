import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

function Details() {
    // for storing data in state for login
    const [data, setData] = useState({ username: '', email: '', password: '' })
    const collectionRef = collection(db, "users");
    const navigate = useNavigate();

    // handling change in input fields
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    // handling submit for login
    const handleSubmit = (e) => {
        e.preventDefault();
        // creating user
        addDoc(collectionRef, {
            username: data.username,
            email: data.email,
            password: data.password
        }).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        console.log(data);
        // redirecting to home page
        navigate('/');
    }
    const handleGetData = async (e) => {

        e.preventDefault();
        try {
            const docs = await getDocs(collectionRef);
            docs.docs.map((item) => console.log({ ...item.data(), id: item.id }))
        } catch (err) {
            console.log('error:', err)
        }
    }
    return (
        <form className='items-center text-center p-2 bg-slate-800'>
            <h1 className='text-3xl text-white'> Enter Details </h1>
            <label htmlFor="name">
                <span className='text-white'>Email</span>
            </label>
            <input className='my-2 mx-2' type="email" name="email" placeholder='enter your name' value={data.email} onChange={onChange} />
            <label htmlFor="password">
                <span className='text-white'>Password</span>
            </label>
            <input className='my-2 mx-2' type="password" name="password" placeholder='enter your password' value={data.password} onChange={onChange} />
            <label htmlFor="username">
                <span className='text-white'>Username</span>
            </label>

            <input className='my-2 mx-2' type="username" name="username" placeholder='enter your username' onChange={onChange} value={data.username}></input>
            <button className='bg-gray-500 rounded-sm p-2 my-2 mx-auto text-white block' type="submit" onClick={handleSubmit}>Store Info</button>
            <button className='bg-gray-500 rounded-sm p-2 my-2 mx-auto text-white block' type="submit" onClick={handleGetData}>Get Data</button>
        </form>
    )
}

export default Details