import styles from './styles.module.scss';

import { 
    ItemCartData, 
    writeInTextType 
} from '../../types/ItemCartData';

export default function ItemCart({ 
    srcImage,
    altImage,
    price,
    subPrice,
    frete,
    deleteItemEvent
}:ItemCartData) {
    

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