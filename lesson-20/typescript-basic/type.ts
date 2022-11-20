const cart = [
    {
        name: "Lenovo X120S",
        price: 17800
    },
    {
        name: "Playstation",
        price: 34000
    },
]

type Age = number | undefined;

type User = {
    readonly name: string
    readonly lastName: string
    birthday?: string
    age: Age,
    getAge(): void,
    calcAge: ()=> void,
}

const user: User = {
    name: "Alex",
    lastName: "Гийом-Василь",
    // birthday: "12.12.1986",
    age: 36,
    getAge() {

    },
    calcAge: ()=> {

    }
}

user.name = "Ward"

type CartItem = {
    name: string
    price: number
}

const total: number = cart.reduce((acum: number, item: CartItem) => acum + item.price, 0);

const {lastName}: User = user;