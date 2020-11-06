import axios from 'axios';
const instance = axios.create({
    baseURL : 'https://us-central1-buyamz-3fe99.cloudfunctions.net/api'
    // 'http://localhost:5001/buyamz-3fe99/us-central1/api'
})
export default instance;