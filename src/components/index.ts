import axios from "axios"

const phoneApi = axios.create({
    baseURL: "http://localhost:3000"
})

export const getTodos = async () => {
    const response = await phoneApi.get("/phone")
    return response.data
}

export const addTodo = async (todo:any) => {
    return await phoneApi.post("/phone", todo)
}

export default phoneApi