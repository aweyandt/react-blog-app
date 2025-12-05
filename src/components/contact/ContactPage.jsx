import React, { useState } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import styles from './ContactPage.module.css';

function ContactPage() {

    const [formInput, setFormInput] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [error, setError] = useState("");


    const submitForm = (e) => {
        e.preventDefault();
        const nameTrimmed = formInput.name.trim();
        const emailTrimmed = formInput.email.trim();
        const messageTrimmed = formInput.message.trim();

        if (!nameTrimmed || !emailTrimmed || !messageTrimmed) {
            setError("Please fill out name, email, and message before submitting.");
            return;
        }

        if (nameTrimmed.length < 5) {
            setError("Name should be min length of 5 characters");
            return;
        }
        setError("");

        console.log(formInput);

        setFormInput({
            name: "",
            email: "",
            message: ""
        })
    };

    return (
        <div className={styles.contact_page}>
            <h2><strong>Contact Us</strong></h2>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={submitForm} className={styles.form}>
                <input placeholder="Name" value={formInput.name} className={styles.input} onChange={e => setFormInput({...formInput, name: e.target.value })} required/>
                <input placeholder="Email" value={formInput.email} className={styles.input} onChange={e => setFormInput({...formInput, email: e.target.value })} required/>
                <textarea placeholder="Message" value={formInput.message} className={styles.textarea} onChange={e => setFormInput({...formInput, message: e.target.value })} required/>
                <button type="submit" className={styles.btn}>Submit</button>
            </form>
        </div>
    );
}

export default ContactPage;
