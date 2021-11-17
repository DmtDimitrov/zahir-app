import styles from './Footer.module.css';


export default function Footer() {
    return (
        <footer className={`page-footer ${styles['footer-bg']}`}>
            <div className={styles['inside-container']}>
                <div className={`row ${styles['footer-padd']}`}>
                    <div className={`col-sm-6 col-lg-3 ${styles['foot-col-padd']}`}>
                        <div className={styles['foot-logo']}><img src="zahir/zahir4.png" alt="" className="img-fluid" /></div>
                        <div className={styles['dream-text']}>
                            <p className={`${styles['dream-text']} ${styles['p']}`}>Our motto is also our name, namely "Zahir - something we have touched or seen once and can never forget again, filling our thoughts to such an extent that it drives us crazy." </p>
                        </div>
                        <div>
                            <i className={`fab fa-facebook-f ${styles['foot-icon']}`}></i>
                            <i className={`fab fa-twitter ${styles['foot-icon']}`}></i>
                            <i className={`fab fa-linkedin-in ${styles['foot-icon']}`}></i>
                            <i className={`fab fa-tumblr ${styles['foot-icon']}`}></i>
                            <i className={`fab fa-vimeo-v ${styles['foot-icon']}`}></i>
                            <i className={`fab fa-pinterest-p ${styles['foot-icon']}`}></i>
                        </div>
                    </div>
                    <div className={`col-sm-6 col-lg-3 ${styles['pop-col']}`}>
                        <span>popular link</span>
                        <hr />
                        <div className="row">
                            <div className={`col-6 ${styles['pop-link']}`}>
                                <a href="#">About Us</a>
                                <a href="#">contact us </a>
                                <a href="#">recipes</a>
                                <a href="#">Chefs</a>
                            </div>
    
                        </div>
                    </div>

                    <div className={`col-sm-6 col-lg-3 ${styles['pop-col']}`}>
                        <span>contact us</span>
                        <hr />
                        <div className={`row ${styles['contact-row-margin']}`}>
                            <i className={`fas fa-map-marker-alt ${styles['contact-icon']}`}></i>
                            <p> 52 Petar Parchevich Street,<br /> Sofia.</p>
                        </div>
                        <div className={`row ${styles['contact-row-margin']}`}>
                            <i className={`fas fa-phone fa-rotate-90 ${styles['contact-icon']}`}></i>
                            <p>+359 879 213 566</p>
                        </div>
                        <div className={`row ${styles['contact-row-margin']}`}>
                            <i className={`far fa-envelope ${styles['contact-icon']}`}> </i>
                            <p> info@zahirsweetcreations.com </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className={`col-12 ${styles['copyright-text']}`}>
                        <p> &#169; 2019 <a href="http://digitaconnect.com/">Digital Connect</a>. All Rights Reserved </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

