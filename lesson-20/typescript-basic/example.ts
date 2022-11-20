import {cart} from "./cart";

interface ICart {
    name: string
    price: number
}

const getTotalPrice = (data: Array<ICart>) => {
    const totalPrice = data.reduce((acum, item) => acum + item.price, 0);
    return totalPrice;
}

const result = getTotalPrice(cart);
console.log(result);

const getWordsArr = (data: number) => {
    return data.split(" ")
}

