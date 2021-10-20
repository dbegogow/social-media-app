import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View>
            <Text style={styles.logo}>SMedia</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        color: 'white'
    }
});

export default Header;