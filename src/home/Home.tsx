import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, View } from 'react-native';
import HomeService from './HomeService'

import LinkPost from './components/LinkPost'
import {Footer} from './components/Footer';

export default function Home() {
    let homeService = new HomeService()

    const [posts, setPosts] = useState<any>([])
    const [page, setPage] = useState(1)
    const [isLoading, setLoading] = useState<any>(true)

    useEffect(() => {
        loadListPosts()
    }, [])

    async function loadListPosts() {
        let listPosts = (await homeService.getListPosts(page))?.data

        if (posts.length > 0) {
            setPosts([...posts, ...listPosts])
        } else {
            setPosts(listPosts)
        }
        setPage(page + 1)
        setLoading(false)
    }

    if (isLoading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" />
            </View>
        )
    } else {
        return (
            <FlatList
                style={styles.container}
                data={posts}
                renderItem={(post) => <LinkPost post={post} />}
                keyExtractor={item => item.id}
                onEndReached={loadListPosts}
                onEndReachedThreshold={0.1}
                ListFooterComponent={Footer(isLoading)}
            />
        )
    }
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    loading: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
});


