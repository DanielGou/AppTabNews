import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LinkPost({ post }: { post: any; }): JSX.Element{
    const { title, username, children_deep_count, publishedAt } = post.item
 
    return(
        <View style={styles.wrapperLinkPost}>
            <Text style={styles.title}>{post.index + 1}.</Text>
            <View style={styles.ml5}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.wrapperInfoPost}>
                    <Text>{children_deep_count} comentários  ·</Text>
                    <Text style={styles.ml5}>{username}  ·</Text>
                    <Text style={styles.ml5}>{publishedAt}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperLinkPost:{
        display: 'flex',
        flexDirection: 'row',
        margin: 15,
    },
    title:{
        fontSize: 17,
        fontWeight: 'bold'
    },
    ml5:{
        marginLeft: 5
    },
    wrapperInfoPost:{
        display: 'flex',
        flexDirection: 'row',
    }
})