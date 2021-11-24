import styles from './AddComment.module.css';

export default function AddComment() {

    return (
        <div className="row">
            <div className="col-md-12  ">
                <div className={styles['comment-container']}>
                    <span>Leave a comment</span>
                    <hr />


                    <form action="#">
                        <div className="row">
                            <div className="col-sm-6"> <input type="text" placeholder="Your Name*" className={styles['sm-input']} /> </div>
                            <div className="col-sm-6">  <input type="email" placeholder="Your Email*" className={styles['sm-input']} /></div>
                        </div>
                        <input type="text" placeholder="Subject" className={styles['sb-input']} />
                        <textarea rows="6" className={styles['area-text']} placeholder="Type Your Mesage Here..."></textarea>
                        <div className="text-center">  <input type="submit" value="send mesage" className={styles['submit-btn']} /></div>
                    </form>
                </div>
            </div>
        </div>
    );
}