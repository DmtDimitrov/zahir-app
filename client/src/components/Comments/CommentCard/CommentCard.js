import styles from './CommentCard.module.css';

export default function CommentCard() {

    return (
        <div className={`row ${styles['comment-row']}`}>
            <div className="col-sm-2 ">
                <img src="max-image/happy-client-3.jpg" alt="" className={`${styles['comment-img']} img-fluid`} />
            </div>
            <div className="col-sm-10 ">
                <div className={styles['comment-text']} >
                    <span> Julie Jackey <span style={{ color: '#aeaeae' }} >|</span> <span style={{ color: '#f65aa7' }}>Dec 24, 2016</span></span>
                    <p>
                        Didn't need no welfare states. Everybody pulled his weight. Gee our old Lasalle ran great. Those were the days.
                    </p>
                    <p className={styles['reply']}> <i className="fas fa-reply"></i> Reply </p>
                </div>
            </div>
            <hr className={styles['comment-line']} />
        </div>
    );
}