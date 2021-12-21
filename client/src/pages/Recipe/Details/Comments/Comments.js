import { useContext } from 'react';

import styles from './Comments.module.css';
import CommentCard from './CommentCard';
import { RecipeContext } from '../../../../contexts/RecipeContext';
import { useToggle } from '../../../../hooks/useToggle'

export default function Comments() {
    const { recipe } = useContext(RecipeContext);
    const [show, setShow] = useToggle(false);
    console.log('recipe');
    console.log(recipe);

    const toggleComments = () => {
        setTimeout(() => {
            setShow(!show);
        }, 500);
    };

    const comments = (
        <>
            {
                recipe?.comments.length > 0
                    ? recipe.comments.map(x => <CommentCard key={x._id} comment={x} />)
                    : <p>No comments yet...</p>
            }
        </>
    )
    return (
        <div className="row">
            <div className="col-sm-12  ">
                <div className={styles['comment-container']}>
                    <span>comments({recipe?.comments.length})</span>
                    <div className={styles['comment-link']}>
                        <button onClick={toggleComments} >{show ? 'Hide all' : 'Show all'}</button>
                    </div>
                    <hr />
                    {show ? comments : ''}

                </div>
            </div>
        </div>
    );
}

