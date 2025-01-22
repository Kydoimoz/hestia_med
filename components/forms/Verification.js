
import * as React from "react";
import classes from "./Verification.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaEnvelope } from 'react-icons/fa';

export default function Verification() {
    const [code, setCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const router = useRouter();
    const [token, setToken] = useState(null); 
    useEffect(() => {
        if (router.query.verificationToken) {
            setToken(router.query.verificationToken);
        }
    }, [router.query]); 
    useEffect(() => {
        if (token) {
            const newUrl = `${window.location.pathname}?verificationToken=${token}`;
            window.history.replaceState(null, '', newUrl); 
        }
    }, [token]);

    useEffect(() => {
        console.log("Aktueller Code:", code);
    }, [code]); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!token) {
            setErrorMessage('Token is missing');
            return;
        }

        try {
            const res = await fetch(`/api/verify/${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, code }), 
            });

            const data = await res.json();

            if (res.ok) {
                setSuccessMessage('Mail successfully verified!');
                setErrorMessage('');
                setTimeout(() => router.push('/'), 2000); 
            } else {
                setErrorMessage(data.error);
                setSuccessMessage('');
            }
        } catch (error) {
            setErrorMessage('Error verifying your mail :(');
        }
    };

    if (!token) {
        return <div>Loading...</div>; 
    }

    return (
        <div className={classes.main__container}>
            <div className={classes.inner__container}>
                <FaEnvelope className={classes.email_icon} />
                <h1 className={classes.heading}>Enter Verification Code</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className={classes.input_field}
                        type="text"
                        placeholder="Verification Code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)} 
                    />
                    <button className={classes.submit_btn} type="submit">Verify</button>
                </form>
                {errorMessage && <p className={`${classes.msg} ${classes.err}`}>{errorMessage}</p>}
                {successMessage && <p className={`${classes.msg} ${classes.success}`}>{successMessage}</p>}
            </div>
        </div>
    );
}
