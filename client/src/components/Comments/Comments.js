import styles from './Comments.module.css';
import CommentCard from './CommentCard';

export default function Comments() {

    return (
        <div className="row">
            <div className="col-sm-12  ">
                <div className={styles['comment-container']}>
                    <span>comments(3)</span>
                    <hr />

                    < CommentCard />
                    < CommentCard />
                    < CommentCard />
                    < CommentCard />

                </div>
            </div>
        </div>
    );
}