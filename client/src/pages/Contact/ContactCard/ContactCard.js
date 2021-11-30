import styles from './ContactCard.module.css';

export default function ContactCard() {
    return (
            <div className={styles['main-container']}>
                <div className={styles['inside-container']}>
                    <div className="row">
                        <div className={`col-sm-4 ${styles['contact-col-marg']} text-center`}>
                            <div className="row ">
                                <div className="col-12 "><i className={`fas fa-map-marker-alt ${styles['col-icon-contact']}`}></i></div>
                            </div>
                            <div className="row ">
                                <div className="col-12 ">
                                    <p> 52 Petar Parchevich Street,<br /> Sofia.</p>
                                </div>
                            </div>
                        </div>

                        <div className={`col-sm-4 ${styles['contact-col-marg-middle']} ${styles['contact-col-border']} text-center`}>
                            <div className="row ">
                                <div className="col-12 "> <i className={`fas fa-phone fa-rotate-90 ${styles['col-icon-contact']}`}></i></div>
                            </div>
                            <div className="row ">
                                <div className="col-12 ">
                                    <p>+359 879 213 566<br />
                                    +359 879 213 566 </p>
                                </div>
                            </div>
                        </div>

                        <div className={`col-sm-4 ${styles['contact-col-marg']} text-center`}>
                            <div className="row ">
                                <div className=" col-12 "> <i className={`far fa-envelope  ${styles['col-icon-contact']}`}> </i></div>
                            </div>
                            <div className="row ">
                                <div className="col-12 ">
                                    <p>info@zahirsweetcreations.com<br />sales@zahirsweetcreations.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}