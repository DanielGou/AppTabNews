import * as axios from 'axios';
import HomeService from '../HomeService';

jest.mock('axios');

const data = [
    {
        "id": "44fdef74-78f1-4c20-b9c8-98c4177f78ef",
        "slug": "deno-lanca-versao-inicial-estavel-do-fresh-novo-framework-web-full-stack",
        "title": "Deno lança versão inicial estável do Fresh, novo framework web full stack",
        "published_at": "2022-06-29T13:15:01.732Z",
        "username": "gugadeschamps",
        "children_deep_count": 1
    },
    {
        "id": "734b0ac0-475b-4181-9a56-45f4a6937562",
        "slug": "treding-repos-github-2906",
        "title": "🔥 Treding Repos Github - 29/06",
        "published_at": "2022-06-29T13:11:53.189Z",
        "username": "iorjunior",
        "children_deep_count": 0
    },
]

describe('HomeService,js', () => {
    it('should return status 200', async ()=>{
        axios.get.mockImplementation(() => Promise.resolve({status: 200, data}))
        let homeService = new HomeService();
        const response = await homeService.getListPosts();
        expect(response.status).toBe(200)
    })

    it('data should return an array', async ()=>{
        axios.get.mockImplementation(() => Promise.resolve({status: 200, data}))
        let homeService = new HomeService();
        const response = await homeService.getListPosts();
        expect(Array.isArray(response.data)).toBeTruthy()
    })

    it('must return a minimal structure (id, slug, title, published_at, username, children_deep_count) for each object in array', async()=>{
        axios.get.mockImplementation(() => Promise.resolve({status: 200, data}))
        let homeService = new HomeService();
        const response = await homeService.getListPosts();
        expect(response.data[0]).toMatchObject({ children_deep_count: expect.any(Number), id: expect.any(String), publishedAt: expect.any(String), slug: expect.any(String), title: expect.any(String), username: expect.any(String) })
    })

    it('publishedAt should return formatted', async()=>{
        axios.get.mockImplementation(() => Promise.resolve({status: 200, data}))
        let homeService = new HomeService();
        const response = await homeService.getListPosts();
        expect(response.data[0].publishedAt).not.toBe(data[0].published_at)
        expect(response.data[1].publishedAt).not.toBe(data[1].published_at)
    })
})