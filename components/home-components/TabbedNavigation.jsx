import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import styles from 'styles/Main.style'
import setStyle from 'styles/Home.style'
import { switchTabs } from 'utils/home'

const TabbedNavigation = () => {
    const [clicked, setClicked] = useState('multi')
    return (
        <View style={styles.flexCSB}>
            <TouchableOpacity style={[setStyle.smallBtn, clicked === 'multi' ? setStyle.hoverSyle : '']}
                onPress={() => switchTabs(setClicked, 'multi')}>
                <Image style={setStyle.icon} source={require('assets/icons/multi-trip.png')} />
                <Text style={[clicked === 'multi' ? styles.textDark : styles.textWhite]}>Multi-Trip</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[setStyle.smallBtn, clicked === 'one-way' ? setStyle.hoverSyle : '']}
                onPress={() => switchTabs(setClicked, 'one-way')}>
                <Image style={setStyle.icon} source={require('assets/icons/arrow_upward.png')} />
                <Text style={[clicked === 'one-way' ? styles.textDark : styles.textWhite]}>One Way</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[setStyle.smallBtn, clicked === 'rounded' ? setStyle.hoverSyle : '']}
                onPress={() => switchTabs(setClicked, 'rounded')}>
                <Image style={setStyle.icon} source={require('assets/icons/rounded.png')} />
                <Text style={[clicked === 'rounded' ? styles.textDark : styles.textWhite]}>Rounded Trips</Text>
            </TouchableOpacity>
        </View>
    )
}


export default TabbedNavigation