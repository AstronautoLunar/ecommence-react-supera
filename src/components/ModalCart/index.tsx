import styles from './styles.module.scss';

interface ModalCartData {
    visible: boolean;
}

export default function ModalCart({ visible }:ModalCartData) {

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

        </div>
    )
}