import './Contact.css';
import Subheader from '../../components/Subheader';


export default function Contact() {
    return (
        <>

            <Subheader
                title="Contact us"
            />

            <div className="main-container ">
                <div className="inside-container">
                    <div className="row">
                        <div className="col-sm-4 contact-col-marg text-center">
                            <div className="row ">
                                <div className="col-12 "><i className="fas fa-map-marker-alt col-icon-contact"></i></div>
                            </div>
                            <div className="row ">
                                <div className="col-12 ">
                                    <p> Collins Street West,<br /> 121 King Street, Melbourne.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 contact-col-marg-middle contact-col-border text-center">
                            <div className="row ">
                                <div className="col-12 "> <i className="fas fa-phone fa-rotate-90 col-icon-contact"></i></div>

                            </div>
                            <div className="row ">
                                <div className="col-12 ">
                                    <p>+(11)123 456 7890<br />
                                        +(11)123 456 7890 </p>
                                </div>

                            </div>

                        </div>

                        <div className="col-sm-4 contact-col-marg text-center">
                            <div className="row ">
                                <div className=" col-12 "> <i className="far fa-envelope col-icon-contact "> </i></div>
                            </div>
                            <div className="row ">
                                <div className="col-12 ">
                                    <p>info@flamix.com<br />info @flamix.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="main-container ">
                <div id="maps">

                </div>

            </div>

            <div className="main-container">
                <div className="inside-container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="">
                                <div className="our-header">
                                    <h2>get in touch with us</h2>
                                    <div className="text-center">
                                        <hr /> <i className="far fa-square rotate-45"></i> <i className="far fa-square rotate-45"></i>
                                        <hr />
                                    </div>
                                </div>


                                <form action="#">
                                    <div className="row">
                                        <div className="col-sm-4"> <input type="text" placeholder="Your Name*" className="sm-input" />
                                        </div>
                                        <div className="col-sm-4"> <input type="email" placeholder="Your Email*" className="sm-input" />
                                        </div>
                                        <div className="col-sm-4"> <input type="text" placeholder="Website" className="sm-input" /></div>
                                    </div>
                                    <input type="text" placeholder="Subject" className="sb-input" />
                                    <textarea rows="6" className="area-text" placeholder="Type Your Mesage Here..."></textarea>
                                    <div className="text-center"> <input type="submit" value="send mesage" className="submit-btn" /></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}