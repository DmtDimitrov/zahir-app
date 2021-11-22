import styles from './PopularTags.module.css';

export default function PopularTags() {

    return (
        <div className={`row ${styles['blog-row-padd']}`}>
            <div className={`col-12 ${styles['side-bar-bg']}`}>
                <div className={`${styles['our-header']} text-center`}>
                    <span>popular tags</span>
                    <div className="text-center">
                        <hr /><i className={`far fa-square ${styles['rotate-45']}`}></i> <i className={`far fa-square ${styles['rotate-45']}`}></i> <hr />
                    </div>
                </div>
                <div className={styles['popular-link']}>
                    <button >About Us</button>
                    <button> Services </button>
                    <button>Gallery </button>
                    <button>Products </button>
                    <button>Business Cards</button>
                    <button>Brocher</button>
                    <button>Post Cards</button>
                </div>


            </div>
        </div>
    );
}