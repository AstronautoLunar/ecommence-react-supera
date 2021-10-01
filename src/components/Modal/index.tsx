import styles from './styles.module.scss';

interface ModalData {
    animation: boolean;
    clickCloseModal: () => void;
}

export default function Modal({ 
    animation, 
    clickCloseModal
}: ModalData) {
    return (
        <div 
            id={
            animation
            ?
            styles.modalOn
            :
            styles.modalOff
            }
        >
            <div id={styles.modalArea}>
            <img
                id={styles.modalButtonLeave}
                src={require('../../assets/icon-leave.svg').default}
                alt="icon leave"
                onClick={clickCloseModal}
            />
            </div>
        </div>
    )
}