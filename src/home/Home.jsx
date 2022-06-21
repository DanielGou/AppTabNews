import { useState, useEffect } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, View } from 'react-native';
import homeService from './homeService'

import LinkPost from './LinkPost'

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
        if(posts.length > 0){
            setPosts([...posts , ...listPosts])
        }else{
            setPosts(listPosts)
        }
        setPage(page+1)
        setLoading(false)
    }

    const renderFooter = () =>{
        if (isLoading) return null
        return (
            <View style={styles.footerLoading}>
              <ActivityIndicator size="large" />
            </View>
          );
    }

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

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    loading:{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerLoading:{
        margin: 20
    }
  });