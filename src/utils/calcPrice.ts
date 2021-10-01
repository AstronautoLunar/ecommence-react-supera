export default function calcPrice(price:number) {
    let frete = 10.00;
    
    const totalPrice = price + frete;

    if(totalPrice >= 250) {
        return {
            totalPrice: price,
            subPrice: price,
            frete: 0
        }
    } else {
        return {
            totalPrice: price + frete,
            subPrice: price,
            frete
        }
    }
}