import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import About from './About';

const Registor = () => {
    const navigateData = useNavigate();

    const [message, setMessage] = useState('');

    // Refs for all inputs
    const nameRef            = useRef();
    const emailRef           = useRef();
    const passwordRef        = useRef();
    const confirmPasswordRef = useRef();
    const mobileRef          = useRef();

    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordPattern = /^[A-Za-z0-9]{5,8}$/;
    const mobilePattern = /^[6-9][0-9]{9}$/;

    const handleSignUp = (e) => {
        e.preventDefault();
        setMessage('');

        const name            = nameRef.current.value.trim();
        const email           = emailRef.current.value.trim();
        const password        = passwordRef.current.value.trim();
        const confirmPassword = confirmPasswordRef.current.value.trim();
        const mobile          = mobileRef.current.value.trim();

        if (!name || !email || !password || !confirmPassword || !mobile) {
            return setMessage('Fill in all the fields');
        }

        if (!emailPattern.test(email)) {
            return setMessage('Email not matched');
        }
        if (!passwordPattern.test(password)) {
            return setMessage('Password must be 5–8 characters');
        }
        if (!mobilePattern.test(mobile)) {
            return setMessage('Mobile must be 10 digits starting from 6–9');
        }
        if (password !== confirmPassword) {
            return setMessage('Passwords do not match');
        }

        const formData = { name, email, password, confirmPassword, mobile };
        sessionStorage.setItem('userData', JSON.stringify(formData));

        setTimeout(() => {
            navigateData('/home');
        }, 500);
    };

    return (
        <div>
            <div className="bg-gray-100 mt-10 m-5 p-4 border rounded max-w-md mx-auto">
                <form onSubmit={handleSignUp} className="flex flex-col items-start">
                    <div className="w-full text-center my-5">
                        <h1 className="text-5xl mb-5 font-bold text-yellow-500">Registor</h1>
                    </div>

                    <label htmlFor="name" className="text-2xl m-2 font-bold">Name:</label>
                    <input type="text" name="name" ref={nameRef} className="border rounded w-full p-2 mb-2" required />

                    <label htmlFor="password" className="text-2xl m-2 font-bold">NewPassword:</label>
                    <input type="password" name="password" ref={passwordRef} className="border rounded w-full p-2 mb-2" required />

                    <label htmlFor="confirmPassword" className="text-2xl m-2 font-bold">ConfirmPassword:</label>
                    <input type="password" name="confirmPassword" ref={confirmPasswordRef} className="border rounded w-full p-2 mb-2" required />

                    <label htmlFor="email" className="text-2xl m-2 font-bold">Email:</label>
                    <input type="email" name="email" ref={emailRef} className="border rounded w-full p-2 mb-2" required />

                    <label htmlFor="mobile" className="text-2xl m-2 font-bold">Mobile:</label>
                    <input type="tel" name="mobile" ref={mobileRef} className="border rounded w-full p-2 mb-4" required />

                    {message && <p className="text-red-500 mb-4">{message}</p>}

                    <div className="w-full flex justify-center">
                        <button type="submit" className="bg-yellow-500 hover:bg-gray-300 hover:cursor-pointer border px-8 py-2 my-3 mt-5 font-bold rounded text-2xl">
                            Submit
                        </button>
                        <span className="hover:cursor-pointer px-2 py-2 my-3 mt-5 text-2xl">
                            <Link to="/" className="font-bold">Login</Link>
                        </span>
                    </div>
                </form>
            </div>
            <About />
        </div>
    );
};

export { Registor };
