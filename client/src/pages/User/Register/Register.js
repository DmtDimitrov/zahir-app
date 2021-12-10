
import { useNavigate } from 'react-router-dom';

import styles from './Register.module.css';

import * as authService from '../../../services/authService';

import Subheader from '../../../components/Subheader';

export default function Register() {

   

    let navigate = useNavigate();

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let firstName = formData.get('firstName')
        let lastName = formData.get('lastName');
        let email = formData.get('email');
        let password = formData.get('password');
        let repeatPassword = formData.get('repeatPassword');

        authService.register({
            firstName,
            lastName,
            email,
            password,
            repeatPassword
        })
            .then(() => {
                navigate('/login');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <>
            <Subheader
                title="Register"
            />
            <div className={`${styles['main-container']} ${styles['blog-container']}`}>
                <div className={styles['inside-container']}>
                    <div className="row">
                        <div className=" col-lg-8 " >
                            <div className="row">
                                <div className="col-md-12  ">
                                    <div className={styles['register-container']}>
                                        <span>Register</span>
                                        <hr />
                                        <form method="POST" onSubmit={registerSubmitHandler}>
                                            <div className="row">
                                                <div className="col-sm-6"> <input type="text" name="firstName" placeholder="First Name*" className={styles['sm-input']} /> </div>
                                                <div className="col-sm-6"> <input type="text" name="lastName" placeholder="Last Name*" className={styles['sm-input']} /> </div>
                                            </div>
                                            <input type="email" name="email" placeholder="Your Email*" className={styles['sb-input']} />
                                            <input type="password" name="password" placeholder="Password" className={styles['sb-input']} />
                                            <input type="password" name="repeatPassword" placeholder="Confirm Password" className={styles['sb-input']} />

                                            <div className="text-center">  <input type="submit" value="register" className={styles['submit-btn']} /></div>
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