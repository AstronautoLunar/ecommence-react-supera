import styles from './styles.module.scss';

import { GamesItemData } from '../../types/GamesItemData';

export default function GamesItem({ 
    src, 
    alt, 
    click,
    identifier
}:GamesItemData) {
    return (
        <img
            id={identifier}
            className={styles.image}
            src={require(`../../assets/${src}`).default}
            alt={alt}
            onClick={click}
        />
    );
}