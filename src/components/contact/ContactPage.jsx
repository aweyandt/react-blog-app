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
            <form onSubmit={submitForm}>
                <input placeholder="Name" value={formInput.name} onChange={e => setFormInput({...formInput, name: e.target.value })} required/>
                <input placeholder="Email" value={formInput.email} onChange={e => setFormInput({...formInput, email: e.target.value })} required/>
                <textarea placeholder="Message" value={formInput.message} onChange={e => setFormInput({...formInput, message: e.target.value })}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactPage;