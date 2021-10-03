interface ItemCartData {
    identifierItem: number;
    srcImage: string;
    altImage: string;
    price: number;
    subPrice: number;
    frete: number;
    deleteItemEvent?: ({ target }:any) => void;
}

export type {
    ItemCartData
}