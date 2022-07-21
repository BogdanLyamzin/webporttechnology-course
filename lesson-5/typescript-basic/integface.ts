interface IUser {
    readonly name: string
    lastName: string
    birthday?: string
    age: number
    lastVisit: Date
}

const user: IUser = {
    name: "Тайвін",
    lastName: "Ланістер",
    birthday: "06.07.346",
    age: 62,
    lastVisit: new Date()
}

interface RequestError extends Error {
    status?: number
}

const createError = (status: number, message: string) => {
    const error: RequestError = new Error(message);
    error.status = status;
    return error;
}