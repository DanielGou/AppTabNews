import { useState, useEffect } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, View } from 'react-native';
import homeService from './HomeService'
import { publishedAt } from './publishedAt';

import LinkPost from './components/LinkPost'
import { Footer } from './components/Footer';

export default function Home(){
    let homeApi = new homeService()

    const [ posts, setPosts ] = useState([])
    const [ page, setPage ] = useState(1)
    const [ isLoading, setLoading ] = useState(true)
  
    useEffect(()=>{
        loadListPosts()
    },[])

    async function loadListPosts(){
        let listPosts = (await homeApi.getListPosts(page)).data

        const listPostFormatted = listPosts.map((post)=>{
            return{
                id: post.id,
                title: post.title,
                username: post.username,
                children_deep_count: post.children_deep_count,
                slug: post.slug,
                publishedAt: publishedAt(post)
            }
        })
        
        if(posts.length > 0){
            setPosts([...posts , ...listPostFormatted])
        }else{
            setPosts(listPostFormatted)
        }
        setPage(page+1)
        setLoading(false)
    }

    const renderFooter = Footer(isLoading)

    if(isLoading){
        return(
            <View style={styles.loading}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }else{
        return(
            <FlatList 
                style={styles.container}
                data={posts}
                renderItem={(post)=><LinkPost post={post}/>}
                keyExtractor={item => item.id}    
                onEndReached={loadListPosts}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
            />
        )
    }
}

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    loading:{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
});


