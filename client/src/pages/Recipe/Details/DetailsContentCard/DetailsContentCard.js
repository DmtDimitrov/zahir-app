import { Link } from 'react-router-dom';

import styles from './DetailsContentCard.module.css';

import { DATE_OPTIONS } from '../../../../constants';
import { useAuthContext } from '../../../../contexts/AuthContext';


import '../Modal/DeleteModal.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function RecipeDetailsContentCard({ 
    recipe, 
    likeButtonClickHandler,
    handleShow,
    show,
    handleClose,
    deleteRecipeHandler
 }) {
    const { user } = useAuthContext()
    let date = new Date(recipe?.createdAt).toLocaleDateString('en-US', DATE_OPTIONS);

    const ownerButtons = (
        <>
            <Link to={`/recipes/edit/${recipe._id}`} className={styles['btn-icon-a']}> Edit</Link>
            <Button variant="primary" onClick={handleShow}>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this recipe?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Go back
                    </Button>
                    <Button variant="primary" onClick={(e) => deleteRecipeHandler(e)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <button>Cook</button>
        </>
    );

    const userButtons = (
        <button onClick={likeButtonClickHandler} >Like</button>
    );
    return (

        <div className="row">
            <div className="col-md-12 ">
                <div className={styles['recipe-post']}>
                    <div> <img src={recipe?.image} alt="" className={`${styles['recipe-image']} img-fluid`} /></div>
                    <div className={styles['recipe-description']}>
                        <div className="text-center">
                            <div className="row">

                                <div className={`col-md-12 ${styles['btn-icon']}`}>
                                    {user?._id
                                        ? user._id === recipe?.ownerId._id
                                            ? ownerButtons
                                            : userButtons
                                        : ""
                                    }
                                </div>
                            </div>

                            <h1>{recipe.title}</h1>
                            <div className={styles['post-info']} >
                                <p>
                                    <span className={styles['info-over']}>
                                        <i className="far fa-user"></i>
                                        By {`${recipe?.ownerId.firstName} ${recipe?.ownerId.lastName}`}
                                    </span>
                                    <span className={styles['spc-line']}> |</span>
                                    <span className={styles['info-over']}> {date}</span>
                                    <span className={styles['spc-line']}> |</span>
                                    <span className={styles['info-over']}> <i className="far fa-heart"></i> {recipe?.likes.length} Likes </span>
                                    <span className={styles['spc-line']}> |</span>
                                    <span className={styles['info-over']}> <i className="far fa-comment"></i> {recipe?.comments.length} comments </span>
                                </p>
                            </div>

                        </div>
                        <div >
                            <h5>Description:</h5>
                            <p>
                                {recipe?.description}
                            </p>
                        </div>

                        <div className={styles['explore']}>
                            <div >

                                <h5>Ingredients:</h5>
                                <ul className="list-group">
                                    {recipe?.ingredients.map(x => (
                                        <li className="list-group-item" key={x._id}>{x.quantity} {x.unit} {x.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h5>Method:</h5>
                            <p>
                                {recipe?.method}
                            </p>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}