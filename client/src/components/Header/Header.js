import styles from './Header.module.css';

import Navbar from '../Navbar';
import Subheader from '../Subheader';

export default function Header() {
    return (
        <div className={`${styles['main-container']} ${styles['contact-color']}`}>
         <Navbar />
         <Subheader />

        </div>
    );
}