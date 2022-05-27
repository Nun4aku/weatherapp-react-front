import axios from "axios";
export default class PostService {
    

    static async getAll () {

        try {
            const response = await axiosOptions().get('moscow')
            return response.data
    
        } catch (e) {
            console.log(e);
        }
    }

    static async update () {

        try {
            const response = await axiosOptions().get('moscow/update')
            return response.data
    
        } catch (e) {
            console.log(e);
        }
    }

}


function axiosOptions () {

    const instance = axios.create({
        baseURL: 'http://127.0.0.1:8000/api/',
    });

    return instance;
}
