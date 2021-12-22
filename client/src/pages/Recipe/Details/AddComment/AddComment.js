import { useNavigate } from 'react-router-dom';

import styles from './AddComment.module.css';

import * as commentService from '../../../../services/commentService';
import { useNotificationContext, types } from '../../../../contexts/NotificationContext';


export default function AddComment({ recipeId }) {
    const { addNotification } = useNotificationContext();

    let navigate = useNavigate();

    const commentSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let message = formData.get('message');

        let commentData = {
            message,
            recipe: recipeId,

        }

        commentService.create(commentData, recipeId)
            .then(() => {
                addNotification('You have added a comment', types.success);
                navigate(`/recipes/${recipeId}`);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="row">
            <div className="col-md-12  ">
                <div className={styles['comment-container']}>
                    <span>Leave a comment</span>
                    <hr />

                    <form method="POST" onSubmit={commentSubmitHandler}>
                        <textarea
                            rows="6"
                            className={styles['area-text']}
                            placeholder="Type Your Message Here..."
                            name="message"
                        ></textarea>
                        <div className="text-center">
                            <input
                                type="submit"
                                value="send message"
                                className={styles['submit-btn']}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}