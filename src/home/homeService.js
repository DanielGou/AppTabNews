import axios from 'axios'

export default class Home{
    constructor(){
        this.axiosService = axios.create({
            'headers': {
                'Access-Control-Allow-Origin': '*'
            }
        });
    }

    async getListPosts(page){
        const data = await fetch('http://www.tabnews.com.br/api/v1/contents?page=1', {
            mode: 'no-cors'
        })

        //console.log(data)
        
        return this.axiosService.get(`http://www.tabnews.com.br/api/v1/contents?page=${page}`)
    }
}