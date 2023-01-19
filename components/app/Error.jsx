import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { bgColor, white } from '../../constants/colors'

const Error = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.err}>Error!!!</Text>
    </View>
  )
}

export default Error

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor,
    },
    err: {
        fontSize: 80,
        color: white,
        fontWeight: 'bold',
    }
});