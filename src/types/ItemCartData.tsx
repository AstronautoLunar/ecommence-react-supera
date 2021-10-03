interface ItemCartData {
    srcImage: string;
    altImage: string;
    price: number;
    subPrice: number;
    frete: number;
    deleteItemEvent: () => void;
}

interface writeInTextType {
    text: string;
    value: number;
}

export type {
    ItemCartData,
    writeInTextType
}