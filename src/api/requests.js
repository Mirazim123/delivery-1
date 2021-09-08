import Axios from "axios";

let url = "http://192.168.20.59:8080"

let axios = Axios.create({
    baseURL: url
})

export let requests = {
    auth: {
        login: (credentials) => axios.post("/signin", credentials)
    }
}