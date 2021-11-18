import styles from './ContactFormCard.module.css';

export default function ContactFormCard() {
    return (
        <div className={styles['main-container']}>
            <div className={styles['inside-container']}>
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="">
                            <div className={styles['our-header']}>
                                <h2>get in touch with us</h2>
                                <div className="text-center">
                                    <hr /> <i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i>
                                    <hr />
                                </div>
                            </div>


                            <form action="#">
                                <div className="row">
                                    <div className="col-sm-4"> <input type="text" placeholder="Your Name*" className={styles['sm-input']} />
                                    </div>
                                    <div className="col-sm-4"> <input type="email" placeholder="Your Email*" className={styles['sm-input']} />
                                    </div>
                                    <div className="col-sm-4"> <input type="text" placeholder="Website" className={styles['sm-input']} /></div>
                                </div>
                                <input type="text" placeholder="Subject" className={styles['sb-input']} />
                                <textarea rows="6" className="area-text" placeholder="Type Your Mesage Here..."></textarea>
                                <div className="text-center"> <input type="submit" value="send mesage" className={styles['submit-btn']} /></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}