import React from "react";
import { create } from 'react-test-renderer';

import LinkPost from "../components/LinkPost";

const post ={
    index: 0,
    item:{
        title: 'Titulo', 
        username: 'Daniel', 
        children_deep_count: '0 comentarios', 
        publishedAt: '1 hora atrás'        
    }
}

const tree = create(<LinkPost post={post} />)

test('snapshot Home', ()=>{
    expect(tree).toMatchSnapshot()
})
