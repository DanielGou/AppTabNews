import React, { useState, useEffect } from 'react';
import PublicationService from './PublicationService';
import { Text, View } from 'react-native';

export default function Publication({ route }: any) {

    const { username, slug } = route.params

    let publicationService = new PublicationService()

    const [ post, setPost ] = useState<any>()

    useEffect(()=>{
        getPost()
    },[])

    async function getPost(){
        setPost((await publicationService.getPost(username, slug)).data)
    }


    return(
        <View>
            { post?.owner_username ? <Text testID='username'>{post.owner_username}</Text> : null }
            { post?.publishedAt ? <Text testID='publishedAt'>{post.publishedAt}</Text> : null}
            { post?.title ? <Text testID='title'>{post.title}</Text> : null}
            { post?.body ? <Text testID='text'>{post.body}</Text> : null}
        </View>
    )
}