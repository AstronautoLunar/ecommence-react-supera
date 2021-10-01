import styles from './styles.module.scss';

interface GamesItemData {
    src: string;
    alt: string;
    click?: () => void;
}

export default function GamesItem({ 
    src, 
    alt, 
    click 
}:GamesItemData) {
    return (
        <img
            className={styles.image}
            src={require(`../../assets/${src}`).default}
            alt={alt}
            onClick={click}
        />
    );
}