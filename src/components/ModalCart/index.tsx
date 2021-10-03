import { ModalCartData } from '../../types/ModalCartData';

import styles from './styles.module.scss';

export default function ModalCart({ 
    visible, 
    children 
}:ModalCartData) {

    return (
        <div 
            id={
                visible
                ?
                styles.modalCartOn
                :
                styles.modalCartOff
            }
        >
            { children }
        </div>
    )
}