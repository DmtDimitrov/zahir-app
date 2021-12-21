import { useContext } from 'react';

import styles from './Comments.module.css';
import CommentCard from './CommentCard';
import { RecipeContext } from '../../../../contexts/RecipeContext';


export default function Comments() {
    const { recipe } = useContext(RecipeContext);
console.log('recipe');
console.log(recipe);
    return (
        <div className="row">
            <div className="col-sm-12  ">
                <div className={styles['comment-container']}>
                    <span>comments({recipe?.comments.length})</span>
                    <hr />
                    {recipe && recipe.comments.map(x => <CommentCard key={x._id} comment={x} />)}

                </div>
            </div>
        </div>
    );
}