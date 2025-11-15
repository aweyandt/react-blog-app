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


    const submitForm = (e) => {
        e.preventDefault();
        if (formInput.name.length < 5) {
            console.error("Name should be min length of 5 characters");
            return
        }
        
        console.log(formInput)

        setFormInput({
            name: "",
            email: "",
            message: ""
        })
    };

    return (
        <div className={styles.contact_page}>
            <h2><strong>Contact Us</strong></h2>
            <form onSubmit={submitForm} className={styles.form}>
                <input placeholder="Name" value={formInput.name} className={styles.input} onChange={e => setFormInput({...formInput, name: e.target.value })} required/>
                <input placeholder="Email" value={formInput.email} className={styles.input} onChange={e => setFormInput({...formInput, email: e.target.value })} required/>
                <textarea placeholder="Message" value={formInput.message} className={styles.textarea} onChange={e => setFormInput({...formInput, message: e.target.value })}/>
                <button type="submit" className={styles.btn}>Submit</button>
            </form>
        </div>
    );
}

export default ContactPage;