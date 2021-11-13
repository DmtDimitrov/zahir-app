import './Contact.css';

export default function Contact() {
    return (
        <>
            <div class="main-container ">
                <div class="inside-container">
                    <div class="row">
                        <div class="col-sm-4 contact-col-marg text-center">
                            <div class="row ">
                                <div class="col-12 "><i class="fas fa-map-marker-alt col-icon-contact"></i></div>
                            </div>
                            <div class="row ">
                                <div class="col-12 ">
                                    <p> Collins Street West,<br/> 121 King Street, Melbourne.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 contact-col-marg-middle contact-col-border text-center">
                            <div class="row ">
                                <div class="col-12 "> <i class="fas fa-phone fa-rotate-90 col-icon-contact"></i></div>

                            </div>
                            <div class="row ">
                                <div class="col-12 ">
                                    <p>+(11)123 456 7890<br/>
                                        +(11)123 456 7890 </p>
                                </div>

                            </div>

                        </div>

                        <div class="col-sm-4 contact-col-marg text-center">
                            <div class="row ">
                                <div class=" col-12 "> <i class="far fa-envelope col-icon-contact "> </i></div>
                            </div>
                            <div class="row ">
                                <div class="col-12 ">
                                    <p>info@flamix.com<br/>info @flamix.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="main-container ">
                <div id="maps">

                </div>

            </div>
           
            <div class="main-container">
                <div class="inside-container">
                    <div class="row">
                        <div class="col-md-12 ">
                            <div class="">
                                <div class="our-header">
                                    <h2>get in touch with us</h2>
                                    <div class="text-center">
                                        <hr/> <i class ="far fa-square rotate-45"></i> <i class ="far fa-square rotate-45"></i>
                                        <hr/>
                                        </div>
                                    </div>


                                    <form action="#">
                                        <div class="row">
                                            <div class="col-sm-4"> <input type="text" placeholder="Your Name*" class="sm-input"/>
                                            </div>
                                            <div class="col-sm-4"> <input type="email" placeholder="Your Email*" class="sm-input"/>
                                            </div>
                                            <div class="col-sm-4"> <input type="text" placeholder="Website" class="sm-input"/></div>
                                        </div>
                                        <input type="text" placeholder="Subject" class="sb-input"/>
                                        <textarea rows="6" class ="area-text" placeholder="Type Your Mesage Here..."></textarea>
                                        <div class ="text-center"> <input type ="submit" value="send mesage" class ="submit-btn"/></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            );
}