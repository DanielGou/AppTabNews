import axios from 'axios';
import { publishedAt } from './publishedAt';

export default class HomeService {
    async getListPosts(page=1) {
        let response = (
            await axios.get(`http://www.tabnews.com.br/api/v1/contents?page=${page}`)
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
    }
}