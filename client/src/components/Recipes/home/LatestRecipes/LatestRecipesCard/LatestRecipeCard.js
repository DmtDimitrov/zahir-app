

import { Link } from 'react-router-dom';

import styles from './LatestRecipeCard.module.css';

export default function LatestRecipeCard({
    recipe
}) {
    return (
        
        <div className={styles['grid-item']}>
            <img className={styles['img-responsive']} alt="" src="./max-image/post-card.jpg"/>
                <a href="./project.html" className={styles['project-description']}>
                    <div className={styles['project-text-holder']}>
                        <div className={styles['project-text-inner']}>
                            <h3>Vivamus vestibulum</h3>
                            <p>Discover more</p>
                        </div>
                    </div>
                </a>
        </div>

    );
}