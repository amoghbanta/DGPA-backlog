import React, {Component} from 'react';
import {Image, Pressable, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import GoodsList from './GoodsList';
import DigitalGoodsDetail from "./DigitalGoodsDetail";
import axios from "axios";


const publicGoodsUrl = "https://vxdssibgsg.execute-api.us-east-1.amazonaws.com/poc";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showingDescription: false,
            digitalGoodsData: [],
            selectedGood: {}
        }
    }

    showGoodDescription = (item) => {
        this.setState({
            showingDescription: true,
            selectedGood: item
        })
    };

    componentDidMount() {
        this.getDigitalPublicGoodsList()
    }

    getDigitalPublicGoodsList = () => {
        axios.get(publicGoodsUrl).then(response => {
            this.setState({digitalGoodsData: response.data.body});
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: this.state.showingDescription ? 'space-between' : 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10
                }}>
                    {this.state.showingDescription &&
                    <Pressable onPress={() => {
                        this.setState({showingDescription: false})
                    }}>
                        <Image
                            style={styles.backImage}
                            source={require('./assets/images/backImage.jpeg')}/>
                    </Pressable>
                    }
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            style={styles.image}
                            source={require('./assets/images/unicef-logo.png')}/>
                        <Text style={styles.title}>
                            Digital Public Goods Backlog
                        </Text>
                    </View>
                    {this.state.showingDescription &&
                    <View/>
                    }
                </View>
                {this.state.showingDescription ?
                    <DigitalGoodsDetail
                        selectedGood={this.state.selectedGood}
                    /> :
                    this.state?.digitalGoodsData?.length > 0 ? <GoodsList
                            data={this.state.digitalGoodsData}
                            showGoodDescription={this.showGoodDescription}
                        /> :
                        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <ActivityIndicator/>
                            <Text style={{textAlign: "center"}}>
                                Fetching digital public goods...
                            </Text>
                        </View>


                }
                <View style={{justifyContent: "center", alignItems: 'center', paddingTop: 10}}>
                    <Text style={styles.bottomBar}>
                        {`${new Date().getFullYear()} © Digital Public Goods Backlog`}
                    </Text>
                    <View>
                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
        image: {
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: "steelblue",
            marginRight: 20
        }
        ,
        backImage: {
            width: 15,
            height: 15,
        }
        ,
        container: {
            flex: 1,
        }
        ,
        title: {
            fontSize: 16,
            fontWeight: '700'
        }
        ,
        bottomBar: {
            fontSize: 12,
            fontWeight: '500'
        }
        ,

    }
)
