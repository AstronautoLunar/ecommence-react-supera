interface GamesItemData {
    src: string;
    alt: string;
    click?: ({ target }:any) => void;
    identifier: string
}

export type {
    GamesItemData
}