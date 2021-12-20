import styles from './CategoriesLink.module.css';

export default function CategoriesLink({
    category,
}) {
    return (
        <>
            <div className={styles['categories-link']}>
                <a href="/#"> <i className="fas fa-angle-right"></i> {category?.name}</a>
            </div>
            <hr />
        </>
    )
}