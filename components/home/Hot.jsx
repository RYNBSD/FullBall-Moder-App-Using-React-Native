import React from 'react'
import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { hot } from '../../constants';
import { bgColor, white } from '../../constants/colors';

const ImageContainer = ({ item }) => {
    return (
        <ImageBackground source={item.img} resizeMode='contain' style={{
            width: 325,
            height: 160,
            marginRight: 10
        }}>
            <LinearGradient colors={["#ffffff00", bgColor]} style={{
                width: "100%",
                height: "100%",
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
            }}>
                <Text style={styles.h3}>{item.title}</Text>
                <Text style={styles.h6}>{item.date}</Text>
            </LinearGradient>
        </ImageBackground>
    );
}

const Hot = () => {
  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 16, color: white, paddingBottom: 5 }}>HOT</Text>
        <FlatList
            data={hot}
            renderItem={ImageContainer}
            keyExtractor={item => item.id}
            horizontal={true}
        />
    </View>
  )
}

export default Hot

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    h3: {
        fontSize: 18,
        color: white,
        paddingLeft: 10,
        fontWeight: '500',
    },
    h6: {
        paddingLeft: 10,
        color: "white",
        opacity: 0.8,
    }
})