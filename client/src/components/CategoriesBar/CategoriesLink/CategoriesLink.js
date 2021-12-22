import { Link } from 'react-router-dom';


import styles from './CategoriesLink.module.css';

export default function CategoriesLink({
    category,
}) {

    return (
        <>
            <div className={styles['categories-link']}>
                <Link to={`/category/${category?.name}`} ><i className="fas fa-angle-right"></i> {category?.name}</Link>
                {/* <a href="/#"> <i className="fas fa-angle-right"></i> {category?.name}</a> */}
            </div>
            <hr />
        </>
    )
}