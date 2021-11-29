import styles from './CategoriesLink.module.css';

export default function CategoriesLink({
    title,
    productsCount,
}) {
    return (
        <>
            <div className={styles['categories-link']}>
                <a href="/#"> <i className="fas fa-angle-right"></i> {title} <span className="">({productsCount})</span></a>
            </div>
            <hr />
        </>
    )
}