import { useNavigate } from 'react-router-dom';

import styles from './Login.module.css';
import * as authService from '../../../services/authService';

import { useAuthContext } from '../../../contexts/AuthContext';
import { useNotificationContext, types } from '../../../contexts/NotificationContext';
import Subheader from '../../../components/Subheader';
import Page from '../../Page';

export default function Login() {
    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext();
    let navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email')
        let password = formData.get('password');

        let userData = {
            email,
            password
        }

        authService.login(userData)
            .then((authData) => {
                login(authData);
                addNotification('You logged in successfully', types.success, 'Success')
                navigate('/recipes/my-recipes');
            })
            .catch(error => {
                console.log(error);
                addNotification('Wrong username or password', types.error, 'Error')
                navigate('/login');
            })


    }
    return (
        <Page>
            <Subheader
                title="Login"
            />
            <div className={`${styles['main-container']} ${styles['blog-container']}`}>
                <div className={styles['inside-container']}>

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

        </Page>
    );
}