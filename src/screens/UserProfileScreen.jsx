import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const UserProfileScreen = () => {

    return (
    
    <TouchableOpacity style={styles.backBtn}>
        <Text>Test</Text>
    </TouchableOpacity> );
}

export default UserProfileScreen;

const styles = StyleSheet.create({
    backBtn: {
        backgroundColor: "black",

    }
});