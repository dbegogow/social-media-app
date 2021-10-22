import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.title}>SMedia</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 18
    },
    title: {
        color: 'white',
        width: 100,
        height: 50,
        fontSize: 25
    }
});

export default Header;