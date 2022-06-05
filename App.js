import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet,} from 'react-native';
// import Auth from './src/GoodsList'
import GoodsList from "./src/GoodsList";
import Home from "./src/Home";

const App = () => {


    return (
        <SafeAreaView style={{flex: 1}}>
            {/*<Auth/>*/}
            <Home/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default App;
