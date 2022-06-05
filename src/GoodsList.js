import React, {Component} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';


const imageNotAvailable = "https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg";

export default class GoodsList extends Component {

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "95%",
                    backgroundColor: "#585858",
                    margin: 10
                }}
            />
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    renderItem={({item}) =>
                        <Pressable style={styles.pressable}
                                   onPress={() => this.props.showGoodDescription(item)}>
                            <Image
                                source={{uri: item.image || imageNotAvailable}}

                                style={styles.image}/>
                            <View style={styles.itemContainer}>
                                <Text style={styles.itemTitle}>
                                    {item.projectName}
                                </Text>
                                <Text numberOfLines={2} ellipsizeMode='tail'
                                      style={styles.itemDescription}>
                                    {item.projectDescription}
                                </Text>
                                <Text style={styles.tags}>
                                    {item.tags}
                                </Text>
                            </View>

                        </Pressable>}

                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '600'
    },
    pressable: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 4
    },
    image: {
        width: 100,
        height: 70,
        borderRadius: 5,
        backgroundColor: "gray",
        marginRight: 20
    },
    itemContainer: {
        justifyContent: "center",
        flex: 1
    },
    itemDescription: {
        flex: 1, flexWrap: 'wrap',
        flexShrink: 1,
        fontSize: 14,
        fontWeight: '500'
    },
    tags: {
        fontSize: 12,
        fontWeight: '400',
        color: "#575656"
    }
})
