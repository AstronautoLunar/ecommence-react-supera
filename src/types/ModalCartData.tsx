interface ModalCartData {
    visible: boolean;
    children?: JSX.Element | JSX.Element[];
    clickCloseModal: () => void;
}

export type {
    ModalCartData
}