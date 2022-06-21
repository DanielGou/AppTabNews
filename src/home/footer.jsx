import { ActivityIndicator, View, StyleSheet } from 'react-native';

export function footer(isLoading) {
    return () => {
        if (isLoading)
            return null;
        return (
            <View style={styles.footerLoading}>
                <ActivityIndicator size="large" />
            </View>
        );
    };
}

export const styles = StyleSheet.create({
    footerLoading:{
        margin: 20
    }
});
