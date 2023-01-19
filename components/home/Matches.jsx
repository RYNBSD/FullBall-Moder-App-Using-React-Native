import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { matchScores } from '../../constants'
import { green, white } from '../../constants/colors';

const MatchContainer = ({ item }) => {
  const shortname = (text) => {
    return (text.length > 5) ? text.slice(0, 5) + '...' : text;
  }

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: green, paddingHorizontal: 10, borderBottomEndRadius: 5, borderBottomLeftRadius: 5, paddingTop: 5 }}>
        <Text style={{ color: white, fontSize: 16, textAlign: 'center' }}>{item.type}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, width: "100%", paddingHorizontal: 10 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={item.leftClub.img} resizeMode='stretch' style={{ width: 50, height: 50 }} />
          <Text  style={{ textAlign: 'center', color: white, fontSize: 12, paddingTop: 10 }}>{shortname(item.leftClub.name)}</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>  
          <Text style={{ textAlign: 'center', color: white, opacity: 0.5 }}>{item.time}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 32, color: white, textAlign: 'center' }}>{item.leftClub.goals}</Text>
            <Text style={{ paddingHorizontal: 15, fontSize: 40, color: white, textAlign: 'center' }}>-</Text>
            <Text style={{ fontSize: 32, color: white, textAlign: 'center' }}>{item.rightClub.goals}</Text>
          </View>
          <Text style={{ textAlign: 'center', color: white, opacity: 0.5 }}>{item.date}</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={item.rightClub.img} resizeMode='stretch' style={{ width: 50, height: 50 }} />
          <Text  style={{ textAlign: 'center', color: white, fontSize: 12, paddingTop: 10 }}>{shortname(item.rightClub.name)}</Text>
        </View>
      </View>
      <View style={{ borderTopColor: "#ffffff20", borderTopWidth: 1, width: "100%", paddingTop: 5 }}>
        <Text style={{ textAlign: 'center', color: white, fontSize: 18, paddingVertical: 5 }}>Details</Text>
      </View>
    </View>
  );
}

const Matches = () => {
  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={{ color: white, textTransform: 'uppercase', paddingBottom: 10, fontSize: 20 }}>MATCH SCORE</Text>
      <FlatList
        data={matchScores}
        renderItem={MatchContainer}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Matches

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#ffffff10",
    marginBottom: 20,
    borderRadius: 5,
  }
});