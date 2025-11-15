import React, { useState } from 'react';
import styles from './Login.module.css';
import { useAuth } from '../authWrapper/AuthContext';
import { useNavigate } from 'react-router';

function Login() {

    const {login} = useAuth();
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        login(userData.username);
        navigate('/posts'); // Redirects the user to the psts page after form is submitted
    }
  return (
    <div className={styles.login_page}>
        <h2><strong>Log In</strong></h2>
        <form className={styles.form} onSubmit={onSubmit}>
            <input 
                placeholder='Username'
                className={styles.input}
                value={userData.username} 
                onChange={(e) => setUserData({...userData, username: e.target.value})}
                required
            />
            <input 
                placeholder='Password'
                type='password'
                className={styles.input}
                value={userData.password} 
                onChange={(e) => setUserData({...userData, password: e.target.value})}
                required
            />
            <button type="submit" className={styles.submit_btn}>Submit</button>
        </form>
    </div>
  );
}

export default Login