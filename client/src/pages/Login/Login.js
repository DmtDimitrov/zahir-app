// import { useHistory } from 'react-router-dom';

import Subheader from '../../components/Subheader';

export default function Login({
    history
}) {
    // let historyHook = useHistory();

    const onFormSubmit = (e) => {
        e.preventDefault();

        //TODO: Login
        // historyHook.push('/contact');
        history.push('/');
    }
    return (
        <>
            <Subheader
                title="Login"
            />
            <div className="main-container blog-container">
                <div className="inside-container">
                    <div className="row">
                        <div className=" col-lg-8 " >
                            <div className="row">
                                <div className="col-md-12  ">
                                    <div className="comment-container">
                                        <span>Login</span>
                                        <hr />


                                        <form onSubmit={onFormSubmit} action="#">

                                            <input type="email" placeholder="Your Email*" className="sb-input" />
                                            <input type="password" placeholder="Password" className="sb-input" />

                                            <div className="text-center">  <input type="submit" value="login" className="submit-btn" /></div>
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