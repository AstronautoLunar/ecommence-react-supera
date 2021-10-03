import { listGamesCardData } from './ProductsContextData';

interface ModalData {
    animationDirection: boolean;
    clickCloseModal: () => void;
    title: string;
    src: string;
    alt: string;
    price: number;
    subPrice: number;
    frete: number;
    clickAddCart?: ({ target }:any) => void;
    clickRemoveCart?: ({ target }:any) => void;
    identifierItem: number;
    listItems: listGamesCardData[];
}

export type {
    ModalData
}