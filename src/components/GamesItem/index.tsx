import styles from './styles.module.scss';

interface GamesItemData {
    src: string;
    alt: string;
    click?: ({ target }:any) => void;
    identifier: string
}

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