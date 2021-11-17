import styles from './Subheader.module.css';

export default function Subheader({
    title
}) {
    return (
        <div className={`${styles['main-container']} ${styles.connect}`}>
            <div className={styles['inside-container']}>
                <div className="row">
                    <div className={`col-12 ${styles.subhead}`}>
                        <h1 className={`text-center ${styles.h1}`}>{title}</h1>
                        <nav className={`${styles['breadcrumb']} ${styles['page-linker']}`}>
                            <a className={styles['breadcrumb-item']} href="#">Home <i className="fas fa-angle-right"></i></a>
                            <span className={`${styles['breadcrumb-item']} ${styles['active']}`}>{title}</span>
                        </nav>
                    </div>

                </div>
            </div>
        </div>
    );
}

