import { StyleSheet, Text, View } from 'react-native';

export default function LinkPost({ post }){
    function publishedAt(){
        let published_At = new Date(post.item.published_at);
        let actualDate = new Date();

        const utcPublished_At = Date.UTC(published_At.getFullYear(), published_At.getMonth(), published_At.getDate(), published_At.getHours());
        const utcActualDate = Date.UTC(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDate(), actualDate.getHours());
        
        let result = ((utcActualDate - utcPublished_At) / (1000 * 60 * 60));

        if(result > 24){
            let dias = `${Math.floor(result / 24)} `

            return dias + (result > 48 ? 'dias atrás': 'dia atrás')
        }

        return result + ' horas atrás'
    }

    return(
        <View style={styles.wrapperLinkPost}>
            <Text style={styles.title}>{post.index + 1}.</Text>
            <View style={styles.ml5}>
                <Text style={styles.title}>{post.item.title}</Text>
                <View style={styles.wrapperInfoPost}>
                    <Text>{post.item.children_deep_count} comentários  ·</Text>
                    <Text style={styles.ml5}>{post.item.username}  ·</Text>
                    <Text style={styles.ml5}>{publishedAt()}</Text>
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