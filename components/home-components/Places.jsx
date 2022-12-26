import React, { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import styles from "styles/Home.style"
import MainStyle from 'styles/Main.style'
import PlacesNavigation from './PlacesNavigation'

const Places = () => {
    const [places, setPlaces] = useState('all')

    return (

        <View>
            <Text style={[styles.heading, MainStyle.textWhite]}>Places to visit</Text>
            <PlacesNavigation places={places} setPlaces={setPlaces} />

            <View style={styles.images_container}>
                <Image style={{ width: '48%', marginBottom: 10 }} source={require('assets/Antara.png')} />
                <Image style={{ width: '48%', marginBottom: 10 }} source={require('assets/Centara.png')} />
                <Image style={{ width: '48%', marginBottom: 10 }} source={require('assets/Centara.png')} />
                <Image style={{ width: '48%', marginBottom: 10 }} source={require('assets/Antara.png')} />

            </View>
        </View>

    )
}

export default Places