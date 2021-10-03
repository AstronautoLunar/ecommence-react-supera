import styles from './styles.module.scss';

import { 
    ItemCartData
} from '../../types/ItemCartData';

export default function ItemCart({ 
    identifierItem,
    srcImage,
    altImage,
    price,
    subPrice,
    frete,
    deleteItemEvent
}:ItemCartData) {

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
                    SubTotal: <span className={styles.green}>
                            R${ 
                                subPrice.toFixed(2) 
                            }
                        </span>
                </span>
                <span className={styles.frete}>
                    frete: <span className={styles.green}>
                        R${ 
                            frete.toFixed(2) 
                        }
                    </span>
                </span>
            </div>
            <img
                data-id={identifierItem}
                className={styles.iconDelete}
                src={require('../../assets/icon-delete.svg').default}
                alt={ altIconDelete }
                onClick={ deleteItemEvent }
            />
        </div>
    )
}