interface ProductsProviderData {
    children: JSX.Element | JSX.Element[];
}

interface listGamesCardData {
    id: number;
    name: string;
    price: number;
    score: number;
    image: string;
}

interface ProductsContextData {
    chooseItem: (id:number) => void;
    currentItem: any;
    dataProducts: object[];
    addGameCard: (id:number) => void;
    listGamesCard: listGamesCardData[];
}

export type {
    ProductsProviderData,
    listGamesCardData,
    ProductsContextData
}