import axios from 'axios';
import { publishedAt } from '../home/publishedAt';

export default class PublicationService {
    async getPost(username, slug) {
        let response = (
            await axios.get(`http://www.tabnews.com.br/api/v1/contents/${username}/${slug}`, {"headers": {
                'Access-Control-Allow-Origin': '*',
            }})
        )
        let postFormatted = {
            id: response.data.id,
            title: response.data.title,
            username: response.data.owner_username,
            slug: response.data.slug,
            body: response.data.body,
            publishedAt: publishedAt(new Date(response.data.published_at))
        }

        return { status: response.status, data: postFormatted }
    }
}