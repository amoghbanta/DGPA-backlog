import React, {Component} from 'react';
import {Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Markdown from 'react-native-markdown-display';

let copy =`
StoryWeaver is an open source platform by Pratham Books for multilingual children’s stories.
It addresses all the issues around the lack of content by using an open access framework and
technology as force multipliers combined with a platform that supports translation and 
re-mixing av stories.

* **Website**: [https://storyweaver.org.in/](https://storyweaver.org.in/)
* **Digital Public Good**: Reviewed by the [Early Grade Reading Community of Practice](https://digitalpublicgoods.net/blog/announcing-the-first-vetted-digital-public-goods-for-foundational-literacy-and-early-grade-reading/) in July 2020.
* **Repositories**:
\t* [https://github.com/PrathamBooks/sw-core](https://github.com/PrathamBooks/sw-core)
\t* [https://github.com/PrathamBooks/sw-web](https://github.com/PrathamBooks/sw-web)


## Project 1: SDK for StoryWeaver reader experience 
StoryWeaver progressive web app (PWA) has a content reader experience built which allows
easy consumption of stories (both online/offline) on the platform for children who are in
the stage of developing the conceptual model of associating words with their corresponding
visual representation. This project would aim to build a Software Development Kit (SDK)
which could allow porting this reader experience to mobile platforms (Android/iOS).

**Expected Impact**: The easy to use web reader experience availability via SDK would encourage
developers on mobile platforms to recreate the seamless reading experience on mobile.

**Deliverable**: SDK for reader experience with a dummy Android app using the SDK for the
currently available PWA reader experience


## Project 2: Predictive Multilingual search on StoryWeaver

StoryWeaver supports story consumption in ~280 languages including a lot of underserved
languages.  The aim of this project is to build a predictive search platform which supports
this large language scalability.

**Expected Impact**: A predictive search available in native underserved languages would
help users easily discover high quality content available on the platform.

**Deliverable**: A multilingual predictive search module using open-source tools like
ElasticSearch which can be integrated on the current StoryWeaver platform.
`
export default class DigitalGoodsDetail extends Component {


    openMailClient = (url) => {
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.tron.log('Can\'t handle url: ' + url)
            } else {
                return Linking.openURL(url)

            }
        }).catch(err => console.error('An error occurred', err))
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{flex: 1, padding: 10,}}>
                    <Markdown style={styles.markdown}>
                        {/*{this.props.selectedGood.markdown}*/}
                        {copy}
                    </Markdown>
                </ScrollView>
                <View style={{justifyContent: "center", alignItems: 'center', height: 75, width: "100%"}}>
                    <TouchableOpacity
                        onPress={() => {
                            this.openMailClient("mailto:amoghbanta@gmail.com")
                        }}
                        style={styles.button}>
                        <Text style={styles.buttonText}>
                            Apply
                        </Text>

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '600'
    },
    button: {
        borderRadius: 5,
        backgroundColor: "steelblue",
        width: "80%",
        height: 50,
        justifyContent: 'center',
        alignItems: "center"
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    image: {
        width: 100,
        height: 70,
        borderRadius: 5,
        backgroundColor: "steelblue",
        marginRight: 20
    },
    itemDescription: {
        fontSize: 14,
        fontWeight: '500'
    },
    tags: {
        fontSize: 12,
        fontWeight: '400',
        color: "#575656"
    }, markdown: {
        flex: 1,
        backgroundColor: "red",
        padding: 10
    }
})
