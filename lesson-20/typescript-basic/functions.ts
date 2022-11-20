const getFullName = (name: string, lastName: string): string => {
    const fullName =  `${name} ${lastName}`;
    return fullName.split(" ")
}

getFullName("Тайвін", "Ланістер")

interface IUser {
    name: string
    lastName: string
    birthday: string,
    setAge(): void
}

const calcUserAge = (birthday) => {

}

calcUserAge("06.07.345")

