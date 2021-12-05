import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService'
import styles from './Login.module.css';
import Subheader from '../../components/Subheader';

export default function Login() {
    const { login } = useContext(AuthContext);
    let navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        //TODO: Login

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email')
        let password = formData.get('password');


        authService.login(email, password)
            .then((authData) => {
                login(authData);
                
                navigate('/home');
            })
            .catch(error => {
                console.log(error);
            })

        // history.push('/');
    }
    return (
        <>
            <Subheader
                title="Login"
            />
            <div className={`${styles['main-container']} ${styles['blog-container']}`}>
                <div className={styles['inside-container']}>
                    <div className="row">
                        <div className=" col-lg-8 " >
                            <div className="row">
                                <div className="col-md-12  ">
                                    <div className={styles['login-container']}>
                                        <span>Login</span>
                                        <hr />
                                        <form onSubmit={onLoginHandler} method="POST">
                                            <input type="email" name="email" placeholder="Your Email*" className={styles['sb-input']} />
                                            <input type="password" name="password" placeholder="Password" className={styles['sb-input']} />
                                            <div className="text-center">  <input type="submit" value="login" className={styles['submit-btn']} /></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}