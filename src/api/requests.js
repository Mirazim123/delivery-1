import Axios from "axios";

let url = "http://192.168.20.59:8080"

let user = localStorage.getItem("user") || "";
let parsedUser = JSON.parse(user);

let axios = Axios.create({
    baseURL: url,
    headers: {
        Token: parsedUser.token
    }
})

export let requests = {
    auth: {
        login: (credentials) => axios.post("/signin", credentials)
    },
    products: {
        getProducts: () => axios.get("/restaurant")
    }
}