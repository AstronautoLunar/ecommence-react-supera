import { 
    createContext, 
    useContext, 
    useState
} from 'react';

import dataProducts from '../data/products.json';

import { 
    ProductsContextData,
    ProductsProviderData,
    listGamesCardData
} from '../types/ProductsContextData';

const ProductsContext = createContext({} as ProductsContextData);


const FIRST_ITEM_POSITION = 0;

export function ProductsProvider({ children }:ProductsProviderData) {
    let [ currentItem, setCurrentItem ] = useState({});
    let [ listGamesCard, setListGamesCard ] = useState([] as listGamesCardData[]);
    
    function chooseItem(id:number) {
        const itemSelected = dataProducts.filter(item => item.id === id);
    
        setCurrentItem(itemSelected[FIRST_ITEM_POSITION]);
    }

    function addGameCard({ target }:any) {
        const identifierItem = Number(target.getAttribute("data-id"));

        function filterItemAddCard(item:listGamesCardData) {
            return item.id === identifierItem;
        }

        const itemSelected:listGamesCardData[] = dataProducts.filter(filterItemAddCard)

        setListGamesCard(listGamesCard.concat(itemSelected));
    }

    function removeGameCard({ target }:any) {
        const identifierItem = Number(target.getAttribute("data-id"));

        function filterItemAddCard(item:listGamesCardData) {
            return item.id === identifierItem;
        }

        const itemSelected:listGamesCardData[] = dataProducts.filter(filterItemAddCard)

        setListGamesCard(listGamesCard.filter(item => item.id !== itemSelected[0].id));
    }

    return (
        <ProductsContext.Provider value={{ 
            chooseItem,
            currentItem,
            dataProducts,
            addGameCard,
            listGamesCard
        }}>
            { children }
        </ProductsContext.Provider>
    )
}

export function useProducts() {
    return useContext(ProductsContext);
}