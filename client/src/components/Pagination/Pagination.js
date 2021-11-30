
import styles from './Pagination.module.css';

export default function Pagination() {

    return (
        <nav className={styles['pagin-nr']}>
            <ul className="pagination  justify-content-center">
                <li className={`${styles['page-item']} ${styles['arr-lf-rt']}`}>
                    <a className={`${styles['page-link']} page-link`} href="/#" tabIndex="-1"><i className="fas fa-arrow-left"></i> </a>
                </li>
                <li className={styles['page-item']}><a className={`${styles['page-link']} page-link`} href="/#">01</a></li>
                <li className={`${styles['page-item']} ${styles['active']} page-item active`}>
                    <a className={`${styles['page-link']} page-link`} href="/#">02 <span className="sr-only">(current)</span></a>
                </li>
                <li className={styles['page-item']}><a className={`${styles['page-link']} page-link`} href="/#">3</a></li>
                <li className={`${styles['page-item']} ${styles['arr-lf-rt']}`}>
                    <a className={`${styles['page-link']} page-link`} href="/#"><i className="fas fa-arrow-right"></i></a>
                </li>
            </ul>
        </nav>
    );
}
