import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { profiles } from '../../constants'
import { green, white } from '../../constants/colors'

const StarContainer = ({ item, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Profile", { item })}
            style={{
                marginRight: 20,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <View style={styles.playerImage}>
                <Image source={item.img} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={styles.info}>
                <Text style={{ color: white, textAlign: 'center', fontWeight: '500' }}>{item.name}</Text>
                <Text style={{ color: white, textAlign: 'center', fontWeight: '400', opacity: 0.7 }}>{item.club}</Text>
            </View>
        </TouchableOpacity>
    )
}

const Star = ({ navigation }) => {
  return (
    <View>
        <View style={{
            width: "100%",
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 50
        }}>
            <Text style={{ color: white, textAlign: 'center', fontWeight: '400', fontSize: 18, textTransform: 'uppercase' }}>Raising Star</Text>
            <Text style={{ color: green, textAlign: 'center', fontWeight: '400', fontSize: 14, textTransform: 'capitalize' }}>See all</Text>
        </View>
        <FlatList
            data={profiles}
            renderItem={({ item }) => StarContainer({ item, navigation })}
            keyExtractor={(item) => item.name}
            horizontal={true}
        />
    </View>
  )
}

export default Star

const styles = StyleSheet.create({
    info: {
        width: 125,
        backgroundColor: "#ffffff10",
        borderColor: "#ffffff20",
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 60,
        paddingBottom: 10,
    },
    playerImage: {
        width: 100,
        height: 100,
        position: 'relative',
        top: 30,
        borderColor: green,
        borderWidth: 3,
        borderRadius: 5,
        overflow: 'hidden',
        shadowColor: green,
        elevation: 20,
    }
});