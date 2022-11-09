import * as axios from 'axios';
import PublicationService from '../PublicationService';
import { publishedAt } from '../../home/publishedAt';

jest.mock('axios');

const data = {
    "id": "4b4ef715-2840-4a2f-8914-dc9d6e3f7742",
    "owner_id": "07ea33ea-78bd-4578-bad2-1cf5323cab07",
    "parent_id": null,
    "slug": "tentando-construir-um-pedaco-de-internet-mais-massa",
    "title": "Tentando construir um pedaço de internet mais massa",
    "body": "Não sei se você compartilha comigo a visão de que recentemente a **internet deixou de ser um lugar massa**, pelo menos em sites onde a mídia principal é primariamente `texto`.",
    "status": "published",
    "source_url": null,
    "created_at": "2022-05-06T15:20:01.159Z",
    "updated_at": "2022-05-06T16:45:51.666Z",
    "published_at": "2022-05-06T15:20:01.158Z",
    "deleted_at": null,
    "owner_username": "filipedeschamps",
    "parent_title": null,
    "parent_slug": null,
    "parent_username": null,
    "tabcoins": 11,
    "children_deep_count": 172
}

describe("PublicationService.js", ()=>{
    it('should return status 200', async ()=>{
        axios.get.mockImplementation(() => Promise.resolve({status: 200, data}))
        let publicationService = new PublicationService();
        const response = await publicationService.getPost();
        expect(response.status).toBe(200)
    })

    it('must return a minimal structure (id, slug, title, published_at, username, body) for each object in array', async()=>{
        axios.get.mockImplementation(() => Promise.resolve({status: 200, data}))
        let publicationService = new PublicationService();
        const response = await publicationService.getPost();
        expect(response.data).toMatchObject({ id: expect.any(String), publishedAt: expect.any(String), slug: expect.any(String), title: expect.any(String), username: expect.any(String), body: expect.any(String) })
    })

    it('publishedAt should return formatted', async()=>{
        axios.get.mockImplementation(() => Promise.resolve({status: 200, data}))
        let publicationService = new PublicationService();
        const response = await publicationService.getPost();
        expect(response.data.publishedAt).toBe(publishedAt(new Date(data.published_at)))
    })
})