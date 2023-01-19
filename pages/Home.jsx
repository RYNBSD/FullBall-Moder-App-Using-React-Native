import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Hot, Star, Matches } from '../components/home';
import BGimage from '../components/global/BGimage';
import Navbar from '../components/global/Navbar';
import { white } from '../constants/colors';

const Home = ({ navigation }) => {
  return (
    <BGimage>
      <Navbar icon={<Feather name="menu" size={30} color={white} />} title="fullball" />
      <Hot />
      <Star navigation={navigation} />
      <Matches />
    </BGimage>
  )
}

export default Home

