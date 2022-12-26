import React from 'react'
import { Image, View } from 'react-native'
import styles from 'styles/Main.style'

const Logo = () => {
    return (
        <View style={styles.bigflex}>
            <Image source={require('assets/logo.png')} />
        </View>
    )
}

export default Logo