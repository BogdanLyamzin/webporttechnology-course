type UserRole = "admin" | "manager" | "operator";

interface IUser {
    email: string
    password: string
    role: UserRole
}

const admin: IUser = {
    email: "bogdan@gmail.com",
    password: "123456",
    role: "admin"
}

enum ProductCategory {
    notebook: "notebooks",
    wash: "wash machine"
}

interface IProduct {
    name: string
    price: number
    category: ProductCategory
}

const product: IProduct = {
    name: "Lenovo X120S",
    price: 17800,
    category: ProductCategory.notebook
}