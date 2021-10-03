import { ModalCartData } from '../../types/ModalCartData';

import styles from './styles.module.scss';

export default function ModalCart({ 
    visible, 
    children,
    clickCloseModal
}:ModalCartData) {

    const ALT_ICON_LEAVE_MODAL_CART = 'icon leave'

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
            <img
                id={styles.iconLeave}
                src={require('../../assets/icon-leave.svg').default}
                alt={ALT_ICON_LEAVE_MODAL_CART}
                onClick={ clickCloseModal }
            />
            <div id={styles.safeArea}>
                { children }
            </div>
        </div>
    )
}