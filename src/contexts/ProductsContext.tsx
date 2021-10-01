import { 
    createContext, 
    useContext, 
    useState
} from 'react';

import dataProducts from '../data/products.json';

interface ProductsContextData {
    chooseItem: (id:number) => void;
    currentItem: any
}

const ProductsContext = createContext({} as ProductsContextData);

interface ProductsProviderData {
    children: JSX.Element | JSX.Element[];
}

const FIRST_ITEM_POSITION = 0;

export function ProductsProvider({ children }:ProductsProviderData) {
    let [ currentItem, setCurrentItem ] = useState({});
    
    function chooseItem(id:number) {
        const itemSelected = dataProducts.filter(item => item.id === id);
    
        setCurrentItem(itemSelected[FIRST_ITEM_POSITION]);
        // console.log(currentItem);
    }

    return (
        <ProductsContext.Provider value={{ 
            chooseItem,
            currentItem
        }}>
            { children }
        </ProductsContext.Provider>
    )
}

export function useProducts() {
    return useContext(ProductsContext);
}