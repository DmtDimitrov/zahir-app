import styles from './Register.module.css';
import Subheader from '../../components/Subheader';

export default function Register() {
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
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-sm-6"> <input type="text" placeholder="First Name*" className={styles['sm-input']} /> </div>
                                                <div className="col-sm-6"> <input type="text" placeholder="Last Name*" className={styles['sm-input']} /> </div>
                                            </div>
                                            <input type="email" placeholder="Your Email*" className={styles['sb-input']} />
                                            <input type="password" placeholder="Password" className={styles['sb-input']} />
                                            <input type="password" placeholder="Confirm Password" className={styles['sb-input']} />

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