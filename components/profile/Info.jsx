import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { green, white } from '../../constants/colors'

const Info = ({ img, name, club, born, position, height, weight }) => {
  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={{
            width: 125,
            height: 125,
            borderColor: green,
            borderWidth: 3,
            elevation: 20,
            borderRadius: 5,
            flexGrow: 0
        }}
      />
      <View style={styles.head}>
        <View style={{ width: "100%", paddingBottom: 5 }}>
            <Text style={{ fontSize: 24, color: white }}>{name}</Text>
            <Text style={{ fontSize: 12, color: green }}>{club}</Text>
        </View>
        <View style={{ width: "100%", flexDirection: 'row' }}>
            <View>
                <View>
                    <Text style={{ color: white, opacity: 0.5, fontSize: 12 }}>Born</Text>
                    <Text style={{ color: white }}>{born}</Text>
                </View>
                <View>
                    <Text style={{ color: white, opacity: 0.5, fontSize: 12 }}>Height</Text>
                    <Text style={{ color: white }}>{height}</Text>
                </View>
            </View>
            <View style={{ paddingLeft: 30 }}>
                <View>
                    <Text style={{ color: white, opacity: 0.5, fontSize: 12 }}>Position</Text>
                    <Text style={{ color: white }}>{position}</Text>
                </View>                
                <View>
                    <Text style={{ color: white, opacity: 0.5, fontSize: 12 }}>Weight</Text>
                    <Text style={{ color: white }}>{weight}</Text>
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default Info

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: "#ffffff10",
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    head: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 20,
        flexGrow: 1,
    }
})