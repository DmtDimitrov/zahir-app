import styles from './SearchBar.module.css';

export default function SearchBar() {

    return (
        <div className="row">
            <div className={`col-12 ${styles['side-bar-bg']}`}>
                <div className={`${styles['our-header']} text-center`}>
                    <span>Search</span>
                    <div className="text-center">
                        <hr /> <i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i> <hr />
                    </div>
                </div>

                <div className="input-group">
                    <input className={styles['form-control']} type="search" placeholder="Type And Hit Enter" aria-label="Search" />
                    <div className="input-group-append">
                        <span className={`input-group-text ${styles['search-loop']}`} id="basic-text1"><i className="fas fa-search text-white " aria-hidden="true"></i></span>
                    </div>
                </div>

            </div>
        </div>
    );
}

