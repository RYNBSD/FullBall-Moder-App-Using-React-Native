import { StyleSheet, SafeAreaView, ScrollView, View, ImageBackground } from 'react-native'
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Navbar, Hot } from '../../components/home';
import { bgColor } from '../../constants/colors';
import { liamMckay } from '../../constants';


const BGimage = ({ children }) => {
  return (
    <SafeAreaView style={styles.body}>
      <ImageBackground source={liamMckay} resizeMode='cover' style={{
        width: "100%",
        height: "70%",
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
      }}>
        <LinearGradient colors={['transparent', bgColor]} style={{ width: "100%", height: "70%" }}>
          <View style={{ backgroundColor: bgColor, opacity: 0.7, width: "100%", height: "100%" }}></View>
        </LinearGradient>
      </ImageBackground>
      <ScrollView style={styles.container}>
        {children}
      </ScrollView>
    </SafeAreaView>
  )
}

export default BGimage

const styles = StyleSheet.create({
    body: {
      backgroundColor: bgColor,
      height: "100%",
    },
    container: {
      width: "90%",
      marginHorizontal: '5%',
    },
  });