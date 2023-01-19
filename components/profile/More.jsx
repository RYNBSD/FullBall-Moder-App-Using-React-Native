import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { white } from '../../constants/colors'

const More = ({ moreInfo }) => {
  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={{ textTransform: 'uppercase', fontSize: 26, color: white, paddingBottom: 10 }}>More Info</Text>
      <Text style={{ fontSize: 16, color: white }}>{moreInfo}</Text>
    </View>
  )
}

export default More

const styles = StyleSheet.create({})