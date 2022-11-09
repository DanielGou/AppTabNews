import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function LinkPost(props:any): JSX.Element{
    const { title, username, children_deep_count, publishedAt } = props.post.item
 
    return(
        <TouchableOpacity style={styles.wrapperLinkPost} onPress={()=>{
            props.navigation.navigate('post',{
                username: props.post.username,
                slug: props.post.slug
            })
        }}>
            <Text style={styles.title}>{props.post.index + 1}.</Text>
            <View style={styles.ml5}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.wrapperInfoPost}>
                    <Text>{children_deep_count} comentários  ·</Text>
                    <Text style={styles.ml5}>{username}  ·</Text>
                    <Text style={styles.ml5}>{publishedAt}</Text>
                </View>
            </View>
        </TouchableOpacity>
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