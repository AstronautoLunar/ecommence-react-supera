import { 
    useState,
    useEffect
} from 'react';

import styles from './styles.module.scss';

interface ModalCartData {
    visible: boolean;
}

export default function ModalCart({ visible }:ModalCartData) {
    let [ modalCartVisible, setModalCartVisible ] = useState({
        animationName: "",
        animationDuration: "",
        display: "flex"
    })

    let { 
        animationName, 
        animationDuration, 
        display
    } = modalCartVisible;

    useEffect(() => {
        if(visible) {

        } else {

        }

    }, [ 
        modalCartVisible, 
        setModalCartVisible, 
        visible 
    ])

    // function openModalCartAnimation() {
    //     setModalCartVisible({ ...modalCartVisible, display: "flex", animationName: "open-moal"})
    // }

    return (
        <div 
            id={styles.modalCart}
            style={{
                animationName,
                animationDuration,
                display
            }}
        >

        </div>
    )
}