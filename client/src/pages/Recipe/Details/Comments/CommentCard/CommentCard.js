import styles from './CommentCard.module.css';

import { DATE_OPTIONS } from '../../../../../constants';

export default function CommentCard({ comment }) {
    let date = new Date(comment?.createdAt).toLocaleDateString('en-US', DATE_OPTIONS);
    return (
        <div className={`row ${styles['comment-row']}`}>
            <div className="col-sm-2 ">
                <img
                    src={comment?.author.image ? comment?.author.image : "zahir/default-profile.jpg"}
                    alt=""
                    className={`${styles['comment-img']} img-fluid`} />
            </div>
            <div className="col-sm-10 ">
                <div className={styles['comment-text']} >
                    <span> {`${comment?.author.firstName} ${comment?.author.lastName} `}
                        <span style={{ color: '#aeaeae' }} >|</span>
                        <span style={{ color: '#f65aa7' }}>{` ${date}`}</span>
                    </span>
                    <p>
                        {comment?.message}
                    </p>
                    <p className={styles['reply']}> <i className="fas fa-reply"></i> Reply </p>
                </div>
            </div>
            <hr className={styles['comment-line']} />
        </div>
    );
}