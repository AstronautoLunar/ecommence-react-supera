import styles from './styles.module.scss';

interface ModalCartData {
    visible: boolean;
    children?: JSX.Element | JSX.Element[];
}

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