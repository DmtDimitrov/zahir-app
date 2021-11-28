import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={`${styles['main-container']} ${styles['contact-color']}`}>
            <div className={styles['inside-container']}>
                <div className={`row ${styles['row-spc']}`}>
                    <div className={`col-md-12 ${styles['col-disp']}`}>
                        <div className={styles['icon-scp']} >
                            <div className={styles['left-side']}>
                                <a className={styles['link-head']} href="#"><i className="fas fa-phone fa-rotate-90"></i>  +359 879 213 566</a> <span>|</span>
                                <a className={styles['link-head']} href="#"><i className="far fa-clock"></i> Sun-Mon: 9.00am to 7.00pm</a> <span>|</span>
                                <a className={styles['link-head']} href="#"><i className="far fa-envelope "> </i> info@zahirsweetcreations.com </a>
                            </div>
                        </div>
                        <div className={`ml-auto ${styles['icon-scp']}`} >
                            <i className={`fab fa-facebook-f `}></i>
                            <i className={`fab fa-twitter ${styles['icon-scp']}`}></i>
                            <i className={`fab fa-linkedin-in ${styles['icon-scp']}`}></i>
                            <i className={`fab fa-tumblr ${styles['icon-scp']}`}></i>
                            <i className={`fab fa-vimeo-v ${styles['icon-scp']}`}></i>
                            <i className={`fab fa-pinterest-p ${styles['icon-scp']}`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}