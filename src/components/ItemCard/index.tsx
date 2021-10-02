import styles from './styles.module.scss';

interface ItemCardData {
    srcImage: string;
    altImage: string;
    price: number;
    subPrice: number;
    frete: number;
    deleteItemEvent: () => void;
}

export default function ItemCard({ 
    srcImage,
    altImage,
    price,
    subPrice,
    frete,
    deleteItemEvent
}:ItemCardData) {
    interface writeInTextType {
        text: string;
        value: number;
    }

    function writeValueInText({ 
        text, 
        value 
    }:writeInTextType) {
        return `${text}: R$${value.toFixed()}`
    }

    const altIconDelete = "icon delete"

    return (
        <div className={styles.ItemCard}>
            <img
                className={styles.image}
                src={require(`../../assets/${srcImage}`).default}
                alt={ altImage }
            />
            <span 
                className={styles.textPrice}
            >R${ price }</span>
            <div className={styles.subPriceAndFrete}>
                <span className={styles.subPrice}>
                    { writeValueInText({
                        text: "subTotal",
                        value: subPrice
                    }) }
                </span>
                <span className={styles.frete}>
                    {
                        writeValueInText({
                            text: "frete",
                            value: frete
                        })
                    }
                </span>
            </div>
            <img
                className={styles.iconDelete}
                src={require('../../assets/icon-delete.svg').default}
                alt={ altIconDelete }
            />
        </div>
    )
}