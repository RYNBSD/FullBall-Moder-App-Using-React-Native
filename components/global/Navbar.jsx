import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

import { white } from '../../constants/colors';

const Navbar = ({ icon, title }) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.h1}>{title}</Text>
      <Feather name="search" size={30} color={white} />
    </View>
  )
}

export default Navbar;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    },
    h1: {
        fontSize: 40,
        color: white,
        fontStyle: 'italic',
        fontFamily: 'Montserrat-Black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
});