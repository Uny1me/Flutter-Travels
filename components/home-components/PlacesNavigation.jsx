import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from "styles/Home.style"
import MainStyle from 'styles/Main.style'
import { switchTabs } from 'utils/home'

const PlacesNavigation = ({ setPlaces, places }) => {

    const navOptions = ['All', 'Popular', 'Most Visited', 'Budget', 'Recommended']
    return (
        <View style={MainStyle.flexCSB}>
            {/*Tabs */}
            {navOptions.map((option, index) => {
                return (
                    <TouchableOpacity key={index} onPress={() => switchTabs(setPlaces, option.toLowerCase())}>
                        <Text style={[MainStyle.textWhite, places === option.toLowerCase() ? styles.borderStyle : '']}>{option}</Text>
                    </TouchableOpacity>
                )
            })}

        </View>
    )
}

export default PlacesNavigation