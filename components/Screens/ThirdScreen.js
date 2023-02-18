import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

import { View, StyleSheet, ScrollView, Image } from 'react-native'
const News = [
    { "Doctor": "Dr Mustufa", "hospital": "Agha Khan", "title": 'Diet', "images": require('../../assets/diet.jpg'), 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat cursus lorem,' },
    { "Doctor": "Dr Ayesha", "hospital": "BismilAllah Cilinic", "title": 'Heat Attack Reason', "images": require('../../assets/HeartAttackReason.jpg'), 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat cursus lorem,' },
    { "Doctor": "Dr Rustom", "hospital": "Ak Hospital", "title": 'Cure', "images": require('../../assets/cure.jpeg'), 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat cursus lorem,' },
    { "Doctor": "Dr Hina Rabani", "hospital": "New City Hospital", "title": 'Avoid', "images": require('../../assets/avoid.jpg'), 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat cursus lorem,' },
    { "Doctor": "Dr Ram Kumar", "hospital": "Heart Research center", "title": 'Do you Feel Pain', "images": require('../../assets/feel.jpg'), 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat cursus lorem,' },
    { "Doctor": "Dr Bashir", "hospital": "Kalbim Hastanie Turkiye", "title": 'How to Avoid Smoking', "images": require('../../assets/stop-smoking.jpeg'), 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat cursus lorem,' },
    { "Doctor": "Dr Rijaa Plastini", "hospital": "Altinbas Hospital", "title": 'Excersie', "images": require('../../assets/exercise.jpg'), 'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat cursus lorem,' },
]
const ThirdScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                {News && News?.map((items, key) => (
                    <Card>
                        {/* <Card.Title title={items.Doctor} subtitle={items.hospital} left={LeftContent} /> */}
                        <Card.Title title={items.Doctor} subtitle={items.hospital} />
                        <View style={styles.parent}>
                            <Image style={styles.myImage} source={require('../../assets/oldMan.png')} />
                        </View>
                        <Card.Content>
                            <Title>{items.title}</Title>
                            <Paragraph>{items.desc}</Paragraph>
                        </Card.Content>
                        <Card.Cover source={items.images} />
                        <Card.Actions>
                            <Button>Cancel</Button>
                            <Button>Ok</Button>
                        </Card.Actions>
                    </Card>
                ))}
            </ScrollView>
        </View>
    )
}

export default ThirdScreen;
const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row'
    },

    myImage: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    // container: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: '#8fcbbc'
    // },
})