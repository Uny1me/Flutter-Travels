import React from 'react'
import styles from 'styles/Main.style'
import setStyle from 'styles/Home.style'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { routePage } from 'utils/home'

const Profile = ({ navigation }) => {
    return (

        <View style={styles.flexCSB}>
            <View style={[setStyle.section]} >
                <Text style={[styles.textWhite, styles.textBold, setStyle.text]}>Kanyinsola</Text>
                <Text style={[styles.textWhite, setStyle.textTwo]}>Where are you heading?</Text>
            </View>

            <TouchableOpacity onPress={() => routePage(navigation, 'Welcome')}>
                <Image source={require('assets/avatar.png')} />
            </TouchableOpacity>
        </View>
    )
}
export default Profile
