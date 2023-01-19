import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { bgColor, white } from '../../constants/colors';
import { loadingSVG } from '../../constants';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loading}>Loading</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor,
    },
    loading: {
        fontSize: 80,
        color: white,
        fontWeight: 'bold',
    }
})