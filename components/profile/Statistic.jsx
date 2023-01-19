import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { ProgressChart } from 'react-native-chart-kit'

import { white, green } from '../../constants/colors'

const screenWidth = Dimensions.get('window').width;


const Chart = ({ winRate, playedGames, draw, games, goals, assist }) => {

    const data = {
        label: ['win rate', 'played games', 'draw'],
        data: [winRate/100, playedGames/100, draw/100]
    }
    
    const chartConfig = {
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    }; 

    return (
        <View style={{ marginTop: 20, backgroundColor: "#ffffff10", borderRadius: 5, borderColor: "#ffffff20", borderWidth: 1 }}>
            <ProgressChart
                data={data}
                width={screenWidth}
                height={200}
                strokeWidth={16}
                radius={32}
                chartConfig={chartConfig}
            />
            <View style={{ paddingLeft: 10, paddingBottom: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, color: white }}>Games</Text>
                    <Text style={{ fontSize: 20, color: green, paddingLeft: 10 }}>{games}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, color: white }}>Goals</Text>
                    <Text style={{ fontSize: 20, color: green, paddingLeft: 10 }}>{goals}</Text>                   
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, color: white }}>Assist</Text>
                    <Text style={{ fontSize: 20, color: green, paddingLeft: 10 }}>{assist}</Text>
                </View>
            </View>
        </View>
    )
}

const Details = () => (
    <View>

    </View>
)

const Statistic = ({ statistic }) => {
  return (
    <View>
        <Chart
            winRate={statistic.winRate}
            playedGames={statistic.playedGames}
            draw={statistic.draw}
            games={statistic.games}
            goals={statistic.goals}
            assist={statistic.assist}
        />
        <Details />
    </View>
  )
}

export default Statistic

const styles = StyleSheet.create({})