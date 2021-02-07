import axios from "axios";

export default axios.create({
    baseURL:'https://react-quizy-bcaf7-default-rtdb.firebaseio.com/'
})