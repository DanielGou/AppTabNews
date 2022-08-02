import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export function Footer({ isLoading }: { isLoading: any; }) {
    if (!isLoading){
        return (
            <View style={styles.footerLoading}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}

export const styles = StyleSheet.create({
    footerLoading:{
        margin: 20
    }
});
