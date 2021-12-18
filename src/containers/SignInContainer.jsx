import React from 'react';
import SignComponent from '../components/SignComponent';

import { StyleSheet, View, Text } from 'react-native';


const SignInContainer = () => {

    return(
        <View style={styles.signInContainter}>
            <SignComponent/>
        </View>
    );
};

export default SignInContainer;

const styles = StyleSheet.create({

    signInContainter: {
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
        height: "41%",
        // backgroundColor: "#000000",
        top: "10%",
        color: "white"
    }

});
