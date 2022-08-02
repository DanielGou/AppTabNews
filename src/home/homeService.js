import axios from 'axios';
import { publishedAt } from './publishedAt';

export default class HomeService {
    constructor() {
        this.axiosService = axios.create({
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        });
    }

    async getListPosts(page=1) {
        try{
            let response = (
                await this.axiosService.get(`http://www.tabnews.com.br/api/v1/contents?page=${page}`)
            )
            let listPostsFormatted = response.data.map(post => {
                return {
                    id: post.id,
                    title: post.title,
                    username: post.username,
                    children_deep_count: post.children_deep_count,
                    slug: post.slug,
                    publishedAt: publishedAt(new Date(post.published_at))
                }
            });

            return { status: response.status, data: listPostsFormatted }
        }catch(error){
            return { status: 500, error }
        }
    }
}