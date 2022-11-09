import React from 'react';
import * as axios from 'axios';
import Publication from "../Publication.tsx"
import {render, screen, waitFor} from '@testing-library/react-native'
import "@testing-library/jest-dom";

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

const paramsMock = {params: {
    username: 'Luisa',
    slug: 'grid-x-flexbox'
}}

describe('Publication.tsx', ()=>{
    it('title must be on the page', async ()=>{
        axios.get.mockImplementation(() => Promise.resolve({status: 200, data}))
        const { queryByTestId } = render(<Publication route={ paramsMock }/>)
        await waitFor(() => {
            expect(queryByTestId('title')).toBeInTheDocument()
        })
    })
    it('username must be on the page', async()=>{
        axios.get.mockImplementation(() => Promise.resolve({status: 200, data}))
        const { queryByTestId } = render(<Publication route={ paramsMock }/>)
        await waitFor(() => {
            expect(queryByTestId('username')).toBeInTheDocument()
        })
    })
    it('publishedAt must be on the page', async()=>{
        axios.get.mockImplementation(() => Promise.resolve({status: 200, data}))
        const { queryByTestId } = render(<Publication route={ paramsMock }/>)
        await waitFor(() => {
            expect(queryByTestId('publishedAt')).toBeInTheDocument()
        })
    })
    it('text must be on the page', async()=>{
        axios.get.mockImplementation(() => Promise.resolve({status: 200, data}))
        const { queryByTestId } = render(<Publication route={ paramsMock }/>)
        await waitFor(() => {
            expect(queryByTestId('text')).toBeInTheDocument()
        })
    })
})