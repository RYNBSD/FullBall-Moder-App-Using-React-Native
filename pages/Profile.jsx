import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

import { Info, More, Statistic } from '../components/profile';
import BGimage from '../components/global/BGimage';
import Navbar from '../components/global/Navbar';
import { white } from '../constants/colors';


const Profile = ({ route, navigation }) => {

  const { item } = route.params;

  return (
    <BGimage>
      <Navbar icon={<AntDesign name="arrowleft" size={30} color={white} onPress={() => navigation.goBack()} />} title="Profile" />
      <Info
        img={item.img}
        name={item.name}
        club={item.club}
        born={item.born}
        position={item.position}
        height={item.height}
        weight={item.weight}
      />
      <Statistic statistic={item.statistic} />
      <More moreInfo={item.moreInfo} />
    </BGimage>
  )
}

export default Profile

const styles = StyleSheet.create({})