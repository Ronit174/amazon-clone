import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-9a9f0/us-central1/api' //THE API URL
});

export default instance;
