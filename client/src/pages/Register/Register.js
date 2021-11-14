import Subheader from '../../components/Subheader';

export default function Register() {
    return (
        <>
            <Subheader
                title="Register"
            />
            <div className="main-container blog-container">
                <div className="inside-container">
                    <div className="row">
                        <div className=" col-lg-8 " >
                            <div className="row">
                                <div className="col-md-12  ">
                                    <div className="comment-container">
                                        <span>Register</span>
                                        <hr />


                                        <form action="#">
                                            <div className="row">
                                                <div className="col-sm-6"> <input type="text" placeholder="First Name*" className="sm-input" /> </div>
                                                <div className="col-sm-6"> <input type="text" placeholder="Last Name*" className="sm-input" /> </div>
                                            </div>
                                            <input type="email" placeholder="Your Email*" className="sb-input" />
                                            <input type="password" placeholder="Password" className="sb-input" />
                                            <input type="password" placeholder="Confirm Password" className="sb-input" />

                                            <div className="text-center">  <input type="submit" value="register" className="submit-btn" /></div>
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