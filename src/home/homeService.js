import axios from 'axios'

export default class HomeService{
    constructor(){
        this.axiosService = axios.create({
            'headers': {
                'Access-Control-Allow-Origin': '*'
            }
        });
    }

    async getListPosts(page){
        
        return this.axiosService.get(`http://www.tabnews.com.br/api/v1/contents?page=${page}`)
    }
}