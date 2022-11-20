/*
Типи даних Typescript:
1. number.
2. string.
3. boolean.
4. null.
5. undefined
6. any.
*/

const userName: string = "Alex";
const userLastName: string = "Гийом-Василь";
const userAge: number = 19;
const userBirthday: string = "12.12.1986";

const getFullName = (name: string, lastName: string) => {

}

const getAge = (birthday: string | undefined) => {
    const [day, month, year] = birthday.split(".");
}

const getTotalPrice = (data: any) => {
    const totalPrice: number = data.reduce((acum: number, item: number)=> acum + item, 0);
    return totalPrice;
}

getTotalPrice("name")

// @ts-ignore
const userPlace: string = 42;

console.log(userBirthday.split("."))
